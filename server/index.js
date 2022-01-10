const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const Voter = require('./models/voter.model')
const Admin = require('./models/admin.model')
const jwt = require('jsonwebtoken')


const MongoDB_URI =" mongodb+srv://ralph:ralph@usjelections.ensix.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

app.use(cors())
app.use(express.json())


try{
    mongoose.connect(
        MongoDB_URI,
        {useNewUrlParser: true, uneUnifiedTopology: true },
        ()=> console.log ("DB Connected!")
    );
}catch(err) {
    console.log("Couldn't connect DB");
}


app.post('/api/register', async (req,res) => {
    try{
        await Voter.create({
            mat: req.body.id,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password,
        })
        res.json({ status: 'ok' })
    }catch(err){
        
        console.log(err)
        res.json({ status: 'error', error: 'Duplicate email or id' })
    }
})

app.post('/api/login', async (req, res) => {
	const voter = await Voter.findOne({
		email: req.body.email,
	})

	if (!voter) {
		return { status: 'error', error: 'Invalid login' }
	}

	const isPasswordValid = await bcrypt.compare(
		req.body.password,
		voter.password
	)

	if (isPasswordValid) {
		const token = jwt.sign(
			{
				name: voter.name,
				email: voter.email,
			},
			'secret123'
		)

		return res.json({ status: 'ok', voter: token })
	} else {
		return res.json({ status: 'error', voter: false })
	}
})

app.get('/api/quote', async (req, res) => {
	const token = req.headers['x-access-token']

	try {
		const decoded = jwt.verify(token, 'secret123')
		const email = decoded.email
		const voter = await Voter.findOne({ email: email })

		return res.json({ status: 'ok', quote: voter.quote })
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: 'invalid token' })
	}
})


app.post('/api/quote', async (req, res) => {
	const token = req.headers['x-access-token']

	try {
		const decoded = jwt.verify(token, 'secret123')
		const email = decoded.email
		await Voter.updateOne(
			{ email: email },
			{ $set: { quote: req.body.quote } }
		)

		return res.json({ status: 'ok' })
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: 'invalid token' })
	}
})

app.post('/api/login-admin', async (req, res) => {
	const admin = await Admin.findOne({
		email: req.body.email,
	})

	if (!admin) {
		return { status: 'error', error: 'Invalid login' }
	}

	const isPasswordValid = await bcrypt.compare(
		req.body.password,
		admin.password
	)

	if (isPasswordValid) {
		const token = jwt.sign(
			{
				name: admin.name,
				email: admin.email,
			},
			'secret123'
		)

		return res.json({ status: 'ok', admin: token })
	} else {
		return res.json({ status: 'error', admin: false })
	}
})

app.get('/api/quote-admin', async (req, res) => {
	const token = req.headers['x-access-token']

	try {
		const decoded = jwt.verify(token, 'secret123')
		const email = decoded.email
		const admin = await Admin.findOne({ email: email })

		return res.json({ status: 'ok', quote: admin.quote })
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: 'invalid token' })
	}
})


app.post('/api/quote-admin', async (req, res) => {
	const token = req.headers['x-access-token']

	try {
		const decoded = jwt.verify(token, 'secret123')
		const email = decoded.email
		await Admin.updateOne(
			{ email: email },
			{ $set: { quote: req.body.quote } }
		)

		return res.json({ status: 'ok' })
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: 'invalid token' })
	}
})


app.listen(4000, () =>{
    console.log('Server started on 4000')
})