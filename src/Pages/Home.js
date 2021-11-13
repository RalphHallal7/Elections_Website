import React from "react";
import { Component } from "react";
import { HashRouter as  Router, Route, NavLink } from "react-router-dom";
import SignInAdmin from "./SignInAdmin";
import SignInForm from "./SignInStudent";

class Home extends Component{
  render(){
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
      
      <Router>
        <Route exact path="/sign-in" component={SignInAdmin} />
        <Route path="/" component={SignInForm} />
      </Router>

    </div>
    </div>

  );
}
}


export default Home;