import React from 'react';
import { useParams } from 'react-router-dom';

const TeamDetail = () => {
  const { teamId } = useParams();

  return <div className='flex-grow'>TeamDetail {teamId}</div>;
};

export default TeamDetail;
