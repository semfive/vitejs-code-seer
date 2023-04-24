import React from 'react';
import PricingIcon from '../../../assets/brand-github-copilot.svg';
import CheckFilled from '../../../assets/circle-check-filled.svg';
import './PricingCard.styles.scss';
import { ButtonFilled } from '../../../components';

interface IPricingCard {
  type: string;
  price: number;
  features: [
    {
      label: string;
      description: string;
    }
  ];
}

const PricingCard = ({ type, price, features }: IPricingCard) => {
  return (
    <div className='pricingCard-wrapper'>
      <h2 className='font-semibold text-3xl text-primary_blue '>{type}</h2>
      <div className='w-20 h-20 flex items-center justify-center rounded-full bg-light_hue_blue '>
        <img
          className='w-10 h-auto object-contain'
          src={PricingIcon}
          alt='pricing type'
        />
      </div>
      <div className='relative'>
        <div className='absolute -left-3.5 -top-2.5 text-2xl text-primary_blue'>
          $
        </div>
        <span className='text-primary_blue text-2xl font-semibold'>
          {price}
        </span>
        <span className='text-sm text-primary_gray'> / month</span>
      </div>
      <div className='w-full h-[1px] my-4 bg-light_gray'></div>
      <section className='w-full flex flex-col gap-6 py-3'>
        {features.map((feature, index) => (
          <div key={index} className='flex gap-3 items-start'>
            <img
              className='w-6 h-auto object-contain'
              src={CheckFilled}
              alt='pricing type'
            />
            <p className='text-primary_gray'>
              <span className='font-semibold text-primary_text'>
                {feature.label}:
              </span>{' '}
              {feature.description}
            </p>
          </div>
        ))}
      </section>

      <ButtonFilled className='w-full rounded-lg uppercase tracking-widest'>
        Subscribe
      </ButtonFilled>
    </div>
  );
};

export default PricingCard;
