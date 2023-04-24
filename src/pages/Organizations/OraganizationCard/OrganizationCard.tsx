import React from 'react';
import { Organization } from '../../../interface';
import './OrganizationCard.styles.scss';
import { useNavigate } from 'react-router-dom';

interface IOrganizationCard {
  organization: Organization;
}

const OrganizationCard = ({ organization }: IOrganizationCard) => {
  const navigate = useNavigate();
  return (
    <div
      id='organization-card-wrapper'
      className='w-full min-w-[300px] md:w-[300px] rounded-xl overflow-hidden relative'
    >
      <div className='absolute left-0 top-0 bottom-0 w-6 bg-dark_blue'></div>
      <div className='ml-6 py-3 flex flex-col gap-4'>
        <div className='flex flex-col px-3 gap-3'>
          <h4 className='text-xl text-dark_blue font-semibold'>
            {organization.organizationName}
          </h4>
          <p className='text-sm text-primary_text'>{organization.type}</p>

          <button
            className='text-md_gray font-semibold uppercase w-fit'
            type='button'
            onClick={() => navigate('/organizations/1')}
          >
            QUICK ACCESS
          </button>
          <div className='text-sm text-primary_text'>
            Domains: <span>{organization.domains}</span>
          </div>
          <div className='text-sm text-black flex justify-between'>
            Teams:{' '}
            <span className='bg-dark_blue px-3 py-[2px] rounded-full text-white text-xs'>
              {organization.numOfTeams}
            </span>
          </div>
        </div>
        <div className='h-[1px] bg-slate-700' />
        <div className='flex justify-between px-3'>
          Current repo:
          <span>{organization.curRepo}</span>
        </div>
      </div>
    </div>
  );
};

export default OrganizationCard;
