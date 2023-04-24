import React, { useRef } from 'react';
import background from '../../assets/welcome-background.png';
import CodeSeerLogo from '../../assets/codeseer-logo.png';
import WelcomeBanner from '../../assets/welcome-banner.png';
import { Link } from 'react-router-dom';
import { ButtonOutline } from '../../components';

const WelcomePage = () => {
  const menuListRef = useRef<HTMLUListElement>(null);

  const handleShowMenu = () => {
    if (menuListRef.current !== null) {
      menuListRef.current.classList.toggle('max-h-0');
      console.log(
        menuListRef.current.firstElementChild?.classList.add('hidden')
      );
    }
  };

  return (
    <main className='h-full w-full flex justify-center items-center'>
      <img
        src={background}
        alt='background'
        className='absolute top-0 left-0 w-full h-screen object-cover mix-blend-normal'
      />

      <div className='w-full xl:w-[1065px]  bg-white shadow-lg flex flex-col rounded-2xl overflow-hidden z-10'>
        <header className='w-full flex justify-between items-center px-12 py-4 md:py-6'>
          <div className='flex items-center'>
            <img
              src={CodeSeerLogo}
              alt='CodeSeer Logo'
              className='h-14 w-auto object-contain mr-2'
            />
            <h3 className='font-semibold text-xl'>CodeSeer</h3>
          </div>

          <ul
            ref={menuListRef}
            className='flex  gap-4 items-end md:mt-0  md:gap-5 font-semibold text-base text-dark_blue'
          >
            <li className='relative after:content-[""] after:w-0 after:h-[1.5px] after:bg-dark_blue after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 hover:after:w-full after:transition-all after:origin-center'>
              <Link to='/'>Home</Link>
            </li>
            <li className='relative after:content-[""] after:w-0 after:h-[1.5px] after:bg-dark_blue after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 hover:after:w-full after:transition-all after:origin-center'>
              <Link to='/features'>Features</Link>
            </li>
            <li className='relative after:content-[""] after:w-0 after:h-[1.5px] after:bg-dark_blue after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 hover:after:w-full after:transition-all after:origin-center'>
              <Link to='/about'>About</Link>
            </li>
            <li className='relative after:content-[""] after:w-0 after:h-[1.5px] after:bg-dark_blue after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 hover:after:w-full after:transition-all after:origin-center'>
              <Link to='/pricing'>Pricing</Link>
            </li>
            <li className='relative after:content-[""] after:w-0 after:h-[1.5px] after:bg-dark_blue after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 hover:after:w-full after:transition-all after:origin-center'>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
          {/* <button className='bg-white border-2 border-solid border-dark_blue rounded-full py-2 px-8 font-semibold text-dark_blue hover:bg-dark_blue hover:text-white transition'>
        Login
      </button> */}
          <Link to='login'>
            <ButtonOutline className='rounded-lg hidden md:block'>
              Login
            </ButtonOutline>
          </Link>
        </header>
        <div className='pt-2 pb-16 px-12 md:pt-5 flex justify-between'>
          <div className='w-auto flex flex-col gap-3 lg:gap-4 pr-8'>
            <h3 className='mt-8 lg:mt-12 text-base font-semibold text-[#5DB6EE]'>
              Codebase Visualize Website
            </h3>
            <h1 className='text-3xl lg:text-4xl font-semibold'>
              Read code easier,
            </h1>
            <h1 className='text-3xl lg:text-4xl font-semibold'>
              Ship code faster
            </h1>
            <p className='text-sm max-w-[400px]  text-gray-500 my-2 md:max-w-none'>
              CodeSee helps you on/offboard, build and refactor applications
              without guesswork through automatic visualizations. Instantly map
              and automate your app’s services, code and code changes.
            </p>
            <Link to='login'>
              <ButtonOutline className='w-fit rounded-lg lg:mt-12 md:justify-self-end'>
                Get Started
              </ButtonOutline>
            </Link>
          </div>
          <div className='hidden flex-shrink-0 w-3/5 lg:w-[600px] md:block'>
            <img
              className='w-full h-auto object-cover'
              src={WelcomeBanner}
              alt='Welcome Page Banner'
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default WelcomePage;
