import React from 'react'
import { Add_list } from '../components/Modify_Lists/Add_list'

const Create_cand_list = () => {
    return (
        <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '90vh'
          }}
        >
            <Add_list/>
        </div>
    )
}

export default Create_cand_list;