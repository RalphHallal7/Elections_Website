const mongoose = require('mongoose')

const List = new mongoose.Schema(
    {
        id: {type: String, required: true, unique: true},
        name: { type: String, required: true },
        year: { type: String, required: true },
        nb_votes: { type: Number},
        most_vote_pres: { type: Number},
        nb_elected: { type: Number},
        voter_id_pres: {type: String},
        pres_elu: { type: Boolean}, 
        voter_id: { type: String}       
    },

    {collection: 'list-data'}
)


const model = mongoose.model('ListData', List)

module.exports = model
