import React, {useMemo} from 'react'
import { useTable } from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './columns'
import './voters_table.css'


export function VotersTable(){
    const DisplayData=MOCK_DATA.map(
        (info)=>{
            return(
                <tr>
                    <td>{info.id}</td>
                    <td>{info.first_name}</td>
                    <td>{info.last_name}</td>
                    <td>{info.email}</td>
                </tr>
            )
        }
    )
 
    return(
        <div>
            <table class="Voters">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>E-mail</th>
                    </tr>
                </thead>
                <tbody>
                 
                    
                    {DisplayData}
                    
                </tbody>
            </table>
             
        </div>
    )
 }