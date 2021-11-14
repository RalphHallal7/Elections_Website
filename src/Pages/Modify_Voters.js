import React from 'react';
import { ModVoters } from '../components/Modify_Lists/ModVoters';

import { useHistory } from "react-router-dom";

const Modify_Voters = () => {

  const history = useHistory();

  const routeChange = () =>{ 
      let path = '/admin'; 
      history.push(path);
  }

  return (
    <div>
      <ModVoters/>
      <div style={{
                height: '5vh'}}></div>
      <div style={{
            height: '10vh'}}><button type="submit" class="button button2" onClick={routeChange}>Back to Admin Page</button></div>
      
    </div>
  );
};

export default Modify_Voters;