import React from 'react'
import { useHistory } from "react-router-dom";

export const Thank_you = () => {
    const history = useHistory();

    const routeChange = () =>{ 
        let path = '/'; 
        history.push(path);}

    return (
        <div>
        
        <h1 style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '20vh',
            color: '#1d04ad'
                }}>
            THANK YOU FOR YOUR VOTE
        </h1>
        <div><h2 style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '20vh',
            color: '#1d04ad'
                }}>
            Your Vote Has Been Registered!
        </h2></div>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '10vh'}}>
                <button type="submit" class="button button1" onClick={routeChange}>GO BACK HOME</button>

        </div>
        
        </div>
    )
}
