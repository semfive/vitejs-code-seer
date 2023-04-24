import React from 'react';
import { Link } from 'react-router-dom';
import TwitterIcon from '../../assets/brand-twitter-filled.svg';
import LinkedinIcon from '../../assets/brand-linkedin.svg';
import GithubIcon from '../../assets/github-icon.png';
import './Footer.styles.scss';

const Footer = () => {
  return (
    <footer className='footer-wrapper'>
      <strong className='font-semibold text-2xl'>CodeSeer</strong>
      <nav className='flex gap-10 text-sm'>
        <Link to='/about'>About</Link>

        <Link to='/contact'>Contact</Link>

        <Link to='#'>Term Of Services</Link>

        <Link to='#'>Privacy Policy</Link>
      </nav>

      <nav className='flex gap-4'>
        <Link to='#'>
          <div className='w-9 rounded-full bg-[#5A99EC] p-2'>
            <img
              className='w-full h-auto object-contain'
              src={TwitterIcon}
              alt='Footer Twitter Icon'
            />
          </div>
        </Link>

        <Link to='#'>
          <div className='w-9'>
            <img
              className='w-full h-auto object-contain'
              src={GithubIcon}
              alt='Footer Github Icon'
            />
          </div>
        </Link>

        <Link to='#'>
          <div className='w-9 rounded-md'>
            <img
              className='w-full h-auto object-contain'
              src={LinkedinIcon}
              alt='Footer Linkedin Icon'
            />
          </div>
        </Link>
      </nav>
      <p className='text-sm'>Copyright @ 2023 CodeSeer. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
