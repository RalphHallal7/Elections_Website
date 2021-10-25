import React from "react";
import { Component } from "react";
import { HashRouter as  Router, Route, NavLink } from "react-router-dom";
import SignInAdmin from "./SignInAdmin";
import SignInForm from "./SignInStudent";



// const Home = () => {
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
          to="/sign-in"
          activeClassName="pageSwitcherItem-active"
          className="pageSwitcherItem"
        >
          Student
        </NavLink>
        <NavLink
          exact
          to="/"
          activeClassName="pageSwitcherItem-active"
          className="pageSwitcherItem"
        >
          Admin
        </NavLink>
      </div>

      <div className="formTitle">
        <NavLink
          to="/sign-in"
          activeClassName="formTitleLink-active"
          className="formTitleLink"
        >
          Sign In Student
        </NavLink>{" "}
        or{" "}
        <NavLink
          exact
          to="/"
          activeClassName="formTitleLink-active"
          className="formTitleLink"
        >
          Sign In Admin
        </NavLink>
      </div>

      <Route exact path="/" component={SignInAdmin} />
      <Route path="/sign-in" component={SignInForm} />

    </div>
    </div>

  );
}
}
export default Home;