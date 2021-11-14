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
import Create_cand_list from "./Pages/Create_cand_list"
import Modify_candidats from "./Pages/Modify_candidats";
import Modify_Voters from "./Pages/Modify_Voters";

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
            <Route path='/create-list' component={Create_cand_list}/>
            <Route path='/modify-candidates' component={Modify_candidats}/>
            <Route path='/modify-voters' component={Modify_Voters}/>


          </Switch>
        </Router>
    );

}

export default App;
