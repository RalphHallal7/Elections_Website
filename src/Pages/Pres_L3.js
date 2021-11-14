import React ,{useState}from 'react'
import { CandidatsL3 } from '../components/Lists_Candidats_Tables/CandidatesL3'
import { useHistory } from "react-router-dom";

export const Pres_L3 = () => {
    const [selects,setSelects]= useState();
    const history = useHistory();

    const routeChange = () =>{ 
        let path = '/thank-you-page'; 
        history.push(path);
    }

    const routeChange1 = () =>{ 
        let path = '/voting'; 
        history.push(path);
    }
    return (
        <div>
            <CandidatsL3/>

            <div>
                <h2 style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '10vh',
            color: '#1d04ad'
            }}>
                    Please Select Your Preferd Preisent If You Have One
                </h2>
            </div>

            <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '10vh',
            color: '#1d04ad'
            }}>
                
                <select value={selects} onChange={e=>setSelects(e.target.value)}>
                    <option>No Presidential Vote</option>
                    <option>Willem</option>
                    <option>Sara</option>
                    <option>Louise</option>
                    <option>Poul</option>
                    <option>Casey</option>
                </select>
                
            </div>

            <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '10vh',
            color: '#1d04ad'}}><h2>Your Choosen President Is: {selects}</h2></div>

            <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '10vh'}}>

                <button type="submit" class="button button1" onClick={routeChange}>Confirm Vote</button>

            </div>

            <div>
                <button type="submit" class="button button2" onClick={routeChange1}>Go Back</button>
            </div>


        </div>

    )
}
