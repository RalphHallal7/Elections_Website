import {React, useState} from 'react'
import { useHistory } from "react-router-dom";
import { HashRouter as  Router, Route, NavLink } from "react-router-dom";

export default function SignInStudent() {

  const history = useHistory();

  const routeChange = () =>{ 
      let path = '/voting'; 
      history.push(path);
  }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function signInStudent(event){
    event.preventDefault()

    const response = await fetch('http://localhost:4000/api/login',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',  
      },
      body: JSON.stringify({
        email,
        password, 
      })
    })

    const data = await response.json()

    if (data.voter) {
      localStorage.setItem('token', data.voter)
      alert('Login successful')
      window.location.href = '/voting'
    }else{
      alert('Please Check your Email and Password')
    }
  }

  return (
    <div className="App">

    <div className="appAside" >
      <div className = "UsjTitle">
        <h1>USJ Student Council Elections</h1>
      </div>
    </div>



    <div className="appForm">
      <div className="pageSwitcher">
        <NavLink
          to="/"
          activeClassName="pageSwitcherItem-active"
          className="pageSwitcherItem"
        >
          Student
        </NavLink>
        <NavLink
          exact
          to="/sign-in"
          activeClassName="pageSwitcherItem-active"
          className="pageSwitcherItem"
        >
          Admin
        </NavLink>
      </div>

      <div className="formTitle">
        <NavLink
          to="/"
          activeClassName="formTitleLink-active"
          className="formTitleLink"
        >
          Sign In Student
        </NavLink>{" "}
        or{" "}
        <NavLink
          exact
          to="/sign-in"
          activeClassName="formTitleLink-active"
          className="formTitleLink"
        >
          Sign In Admin
        </NavLink>
      </div>      
    
      <div className="formCenter">
        <form className="formFields" onSubmit={signInStudent} >
          <div className="formField">
            <label className="formFieldLabel" htmlFor="email">
              USJ E-Mail Address
            </label>
            <input className='formFieldInput'
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
              type="email"
              placeholder='Enter your USJ E-mail' 
            />
          </div>

          <div className="formField">
            <label className="formFieldLabel" htmlFor="password">
              Password
            </label>
            <input className='formFieldInput'
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
              type='password'
              placeholder='Enter your password' 
            />
          </div>

          <div className="formField">
            {/* <input className="button button1" type='submit' value="Sign In" /> */}
            <button className="button button1" onClick={routeChange}>Sign In</button>
          </div>

        </form>
      </div>


    </div>
    </div>

  )
}