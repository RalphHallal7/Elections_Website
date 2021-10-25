import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import ListVoters from "./Pages/ListVoters";
import ListCandidats from "./Pages/ListCandidats";
import Law from "./Pages/Law";
import SignInForm from "./Pages/SignInStudent";
import SignInAdmin from "./Pages/SignInAdmin";


import "./App.css";
import Home from "./Pages/Home";


  function App() {
    return (

       
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/list-of-voters' component={ListVoters} />
            <Route path='/list-of-candidats' component={ListCandidats} />
            <Route path='/election-law' component={Law} />

          </Switch>
        </Router>

       

    );

}

export default App;
