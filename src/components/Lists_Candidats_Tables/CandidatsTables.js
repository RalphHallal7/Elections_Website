import React, {useMemo} from 'react'
import { useTable } from 'react-table'
import MOCK_DATA1 from './List1_Data.json'
import MOCK_DATA2 from './List2_Data.json'
import MOCK_DATA3 from './List3_Data.json'
import { COLUMNS } from './columns_cand'

export function CandidatsTables(){
    const DisplayData1=MOCK_DATA1.map(
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

    const DisplayData2=MOCK_DATA2.map(
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

    const DisplayData3=MOCK_DATA3.map(
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
            }}> LIST 1 </h1>

            <table class="List1" >
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

            <h1 style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '20vh',
                color: '#1d04ad'
            }}> LIST 2 </h1>

            <table class="List2" >
                <thead>
                    <tr>
                    <th>NUM</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    {DisplayData2}   
                </tbody>
            </table>

            <h1 style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '20vh',
                color: '#1d04ad'
            }}> LIST 3 </h1>

            <table class="List3" >
                <thead>
                    <tr>
                    <th>NUM</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    {DisplayData3}   
                </tbody>
            </table>


                     
        </div>


    )
 }