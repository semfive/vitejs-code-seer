import React from 'react';
import background from '../../assets/welcome-background.png';
import GithubIcon from '../../assets/github-icon.png';
import { ButtonOutline } from '../../components';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLoginBtn = (e: any) => {
    e.preventDefault();
    navigate('/organizations');
  };

  return (
    <div className='relative h-full w-full flex justify-center items-center'>
      <img
        src={background}
        alt='background'
        className='absolute top-0 left-0 w-full h-screen object-cover mix-blend-normal'
      />
      <main className='w-full md:w-[600px] flex flex-col items-center bg-white shadow-lg rounded-2xl overflow-hidden z-10'>
        <h1 className='font-bold text-4xl text-md_blue mt-8'>
          Welcome to CodeSeer
        </h1>
        <img
          src={GithubIcon}
          alt='background'
          className='w-32 h-auto object-contain my-3'
        />
        <ButtonOutline
          className='rounded-lg font-semibold mb-8'
          onClick={handleLoginBtn}
        >
          Login with Github
        </ButtonOutline>
        <div className='w-full border-t border-black pt-7 pb-4 text-center text-sm'>
          <p>Not yet? Login with a different account</p>
          <p>
            Need an account?{' '}
            <span className='underline cursor-pointer hover:font-semibold'>
              <Link to='#'>Sign up</Link>
            </span>
          </p>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
