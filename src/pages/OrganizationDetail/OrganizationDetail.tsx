import React from 'react';
import './OrganizationDetail.styles.scss';
import Sidebar from '../../components/Sidebar/Sidebar';
import { useParams } from 'react-router-dom';

const OrganizationDetailPage = () => {
  const { organizationId } = useParams();

  return <div className='flex-grow '>Organization {organizationId}</div>;
};

export default OrganizationDetailPage;
