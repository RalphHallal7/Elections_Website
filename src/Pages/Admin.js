import React from 'react';
import { useHistory } from "react-router-dom";

const Admin = () => {

  const history = useHistory();

  const routeChange1 = () =>{ 
      let path = '/create-list'; 
      history.push(path);
  }

  const routeChange2 = () =>{ 
    let path = '/modify-candidates'; 
    history.push(path);
  }

  const routeChange3 = () =>{ 
    let path = '/modify-voters'; 
    history.push(path);
  }
  return (
    <div
    //   style={{
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     height: '20vh'
    //   }}
    >
      <h1 style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '20vh',
            color: '#1d04ad'
            }}>Admin Main Page</h1>

      <p style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '3vh',
            color: '#1d04ad'
            }}>In this page you can modify the existing lists of candidates.</p> 

      <p style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '3vh',
            color: '#1d04ad'
            }}>Add a new list of candidates.</p>       

      <p style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '3vh',
            color: '#1d04ad'
            }}>And you can even modify the list of voters.</p>     
      
      <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '10vh'}}></div>      

      <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '10vh'}}><button type="submit" class="button button1" onClick={routeChange1}>Create a New List</button></div>

      <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '10vh'}}><button type="submit" class="button button1" onClick={routeChange2}>Modify List of Candidates</button></div>

      <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '10vh'}}><button type="submit" class="button button1" onClick={routeChange3}>Modify List of Voters</button></div>

    </div>
  );
};

export default Admin;