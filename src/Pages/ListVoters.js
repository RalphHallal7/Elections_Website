import React from 'react';
import { VotersTable } from '../components/Voters_Table/VotersTable';

const ListVoters = () => {
  return (
    <div>
      <h1 style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '10vh',
        color: '#1d04ad'
      }}>
        List of Voters
      </h1>

        <VotersTable/>
    </div>
    
  );
};

export default ListVoters;