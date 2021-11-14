import React from 'react'
import { ModCandidatsList1 } from '../components/Modify_Lists/ModCandidatsList1';
import { ModCandidatsList2 } from '../components/Modify_Lists/ModCandidatsList2';
import { ModCandidatsList3 } from '../components/Modify_Lists/ModCandidatsList3';

import { useHistory } from "react-router-dom";

const Modify_candidats = () => {

    const history = useHistory();

    const routeChange = () =>{ 
        let path = '/admin'; 
        history.push(path);
    }

    return (
        <div>
            <div><ModCandidatsList1/></div>
            <div><ModCandidatsList2/></div>
            <div><ModCandidatsList3/></div>
            <div style={{
                height: '5vh'}}></div>
            <div style={{
                height: '10vh'
                }}><button type="submit" class="button button2" onClick={routeChange}>Back to Admin Page</button></div>
        </div>
    )
}

export default Modify_candidats;