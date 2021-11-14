import React, {useMemo} from 'react'
import { useTable } from 'react-table'
import MOCK_DATA3 from './List3_Data.json'
import { COLUMNS } from './columns_cand'

export function CandidatsL3(){
    const DisplayData1=MOCK_DATA3.map(
        (info)=>{
            return(
                <tr>
                    <td>{info.id}</td>
                    <td>{info.first_name}</td>
                    <td>{info.last_name}</td>
                </tr>
            )
        }
    )

    return(
        <div>
            <h1 style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '20vh',
                color: '#1d04ad'
            }}> YOU VOTED FOR LIST 3 </h1>

            <table class="List3" >
                <thead>
                    <tr>
                    <th>NUM</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    {DisplayData1}   
                </tbody>
            </table>
            </div>)}