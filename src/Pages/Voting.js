import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { CandidatsTables } from '../components/Lists_Candidats_Tables/CandidatsTables';
import jwt from 'jsonwebtoken'

const Voting = () => {
  const history = useHistory();

  async function populateQuote(){
    const req = await fetch('http://localhost:4000/api/quote', {
      headers:{
        'x-access-token': localStorage.getItem('token'),
      }
    })

    const data = req.json()
    console.log(data)
  }


  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token){
      const voter = jwt.decode(token)
      if(!voter){
        localStorage.removeItem('token')
        history.replace('/voting')
      }else{
        populateQuote()
      }
    }
  }, [])

  const routeChange1 = () =>{ 
      let path = '/choose-pres-list1'; 
      history.push(path);
  }

  const routeChange2 = () =>{ 
    let path = '/choose-pres-list2'; 
    history.push(path);
  }

  const routeChange3 = () =>{ 
    let path = '/choose-pres-list3'; 
    history.push(path);
  }

  const routeChange4 = () =>{ 
    let path = '/thank-you-page'; 
    history.push(path);
  }

  return (
    <div>
      <div><h1 style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '20vh',
        color: '#1d04ad'
      }}>Main Voting Page</h1></div>

      <div>
        <p style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '3vh',
            color: '#1d04ad'
            }}>Welcome to the USJ STudents Council Elections. </p>
      </div>
      <div>
      <p style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '3vh',
            color: '#1d04ad'
            }}>Please vote for one of the lists below and choose your prefered president from the choosen list.  </p>
      </div>
      <div>
      <p style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '3vh',
            color: '#1d04ad'
            }}>Do not forget that you select a blank vote.  </p>
      </div>
      <CandidatsTables/>
      
      <div>
      <h2 style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '15vh',
            color: '#1d04ad'
            }}>Please Select your Choice </h2>
      </div>

      <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '10vh'}}>
            <button type="submit" class="button button1" onClick={routeChange1}>LIST 1</button>
            <button type="submit" class="button button1" onClick={routeChange2}>LIST 2</button>
            <button type="submit" class="button button1" onClick={routeChange3}>LIST 3</button>
            <button type="submit" class="button button1" onClick={routeChange4}>Blank Vote</button>
            </div>


    </div>

  );
};

export default Voting;