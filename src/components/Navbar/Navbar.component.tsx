import React from 'react';
import CodeSeerLogo from '../../assets/codeseer-logo.png';
import { BellFilledIcon, PlusIcon, SearchIcon } from '../icons';
import './Navbar.styles.scss';

const Navbar = () => {
  return (
    <header className='navbar-wrapper'>
      <div className='navbar-left'>
        <button className='flex items-center gap-4'>
          <img src={CodeSeerLogo} alt='CodeSeer Logo' />
          <h3 className='font-semibold text-2xl'>CodeSeer</h3>
        </button>
      </div>
      <div className='navbar-search-wrapper flex gap-3 ring-1 ring-white rounded-lg w-[360px] py-2 px-4 focus-within:ring-2'>
        <div>
          <SearchIcon />
        </div>
        <input
          id='navbar-search__input'
          className='w-full bg-transparent border-none outline-none focus:right-0 placeholder:italic placeholder:text-sm'
          type='text'
          placeholder='What are you searching for...'
        />
      </div>
      <div className='navbar-right'>
        <button className='text-white hover:scale-110 transition ease-out'>
          <BellFilledIcon />
        </button>
        <button className='text-white hover:scale-110 transition ease-out'>
          <PlusIcon />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
