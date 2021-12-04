import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import ListVoters from "./Pages/ListVoters";
import ListCandidats from "./Pages/ListCandidats";
import "./App.css";
import Home from "./Pages/Home";
import Voting from "./Pages/Voting";
import Admin from "./Pages/Admin";
import Create_cand_list from "./Pages/Create_cand_list"
import Modify_candidats from "./Pages/Modify_candidats";
import Modify_Voters from "./Pages/Modify_Voters";
import { Pres_L1 } from "./Pages/Pres_L1";
import { Pres_L2 } from "./Pages/Pres_L2";
import { Pres_L3 } from "./Pages/Pres_L3";
import { Thank_you } from "./Pages/Thank_you";
import {Results} from "./Pages/Results"
import NavBar from "./components/Navbar/NavBar";

  function App() {
    return (

        <Router>
          <NavBar/>
          <Switch>
            
            <Route path='/' exact component={Home} />
            <Route path="/sign-in" component={Home} />
            <Route path='/list-of-voters' component={ListVoters} />
            <Route path='/list-of-candidats' component={ListCandidats} />
            <Route path='/voting' component={Voting}/>
            <Route path='/admin' component={Admin}/>
            <Route path='/results' component={Results}/>
            <Route path='/create-list' component={Create_cand_list}/>
            <Route path='/modify-candidates' component={Modify_candidats}/>
            <Route path='/modify-voters' component={Modify_Voters}/>
            <Route path='/choose-pres-list1' component={Pres_L1}/>
            <Route path='/choose-pres-list2' component={Pres_L2}/>
            <Route path='/choose-pres-list3' component={Pres_L3}/>
            <Route path='/thank-you-page' component={Thank_you}/>


          </Switch>
        </Router>
    );

}

export default App;
