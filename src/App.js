import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import ListVoters from "./Pages/ListVoters";
import ListCandidats from "./Pages/ListCandidats";
import Law from "./Pages/Law";
// import SignInForm from "./Pages/SignInStudent";
// import SignInAdmin from "./Pages/SignInAdmin";
import "./App.css";
import Home from "./Pages/Home";
import Voting from "./Pages/Voting";
import Admin from "./Pages/Admin";
import Results from "./Pages/Results";

  function App() {
    return (

      
        <Router>
          <Navbar />
          <Switch>
            
            <Route path='/' exact component={Home} />
            <Route path="/sign-in" component={Home} />
            <Route path='/list-of-voters' component={ListVoters} />
            <Route path='/list-of-candidats' component={ListCandidats} />
            <Route path='/election-law' component={Law} />
            <Route path='/voting' component={Voting}/>
            <Route path='/admin' component={Admin}/>
            <Route path='/results' component={Results}/>

          </Switch>
        </Router>
    );

}

export default App;
