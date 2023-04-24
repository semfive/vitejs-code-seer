import React, { useState } from 'react';
import './Contact.styles.scss';
import { ButtonFilled } from '../../components';
import {
  BuildingArcIcon,
  ClockIcon,
  EmailIcon,
  PhoneIcon,
} from '../../components/icons';
import { useNavigate } from 'react-router-dom';

interface FormValue {
  name: string;
  email: string;
  message?: string;
}

const ContactPage = () => {
  const navigate = useNavigate();

  const [formValue, setFormValue] = useState<FormValue>({
    name: '',
    email: '',
  });

  const handleSubmitContact = (e: any) => {
    e.preventDefault();

    navigate('/');
  };

  return (
    <main className='h-full flex justify-center items-center bg-[#F0F0F0]'>
      <div className='contact-wrapper relative bg-white'>
        <div className='flex justify-between w-full pl-8 md:pl-20 py-20 z-10'>
          <section className='w-[340px] flex flex-col '>
            <h1 className='text-5xl font-semibold mb-3'>Contact Us</h1>
            <p className='text-md_gray text-sm'>
              Feel free to contact us any time. We will get back to you as soon
              as we can!
            </p>
            <form
              onSubmit={handleSubmitContact}
              className='flex flex-col gap-6 mt-8'
            >
              <input
                id='name'
                className='bg-transparent pb-2 outline-none ring-0 focus:ring-0 border-b-2 border-gray-500'
                type='text'
                name='name'
                placeholder='Name'
                onChange={(e) =>
                  setFormValue({ ...formValue, name: e.target.value })
                }
              />
              <input
                id='email'
                className='bg-transparent pb-2 outline-none ring-0 focus:ring-0 border-b-2 border-gray-500'
                type='email'
                name='email'
                placeholder='Email'
                onChange={(e) =>
                  setFormValue({ ...formValue, email: e.target.value })
                }
              />
              <input
                id='message'
                className='bg-transparent pb-2 outline-none ring-0 focus:ring-0 border-b-2 border-gray-500'
                type='text'
                name='message'
                placeholder='Message'
                onChange={(e) =>
                  setFormValue({ ...formValue, message: e.target.value })
                }
              />
              <ButtonFilled type='submit' className='rounded-md mt-4'>
                Send
              </ButtonFilled>
            </form>
          </section>
          <section className='w-[300px] md:[360px] flex flex-col bg-md_blue pl-6 py-8'>
            <h1 className='text-4xl text-white font-semibold mb-8'>Info</h1>
            <ul className='flex-grow text-white font-light flex flex-col justify-between'>
              <li className='flex gap-2'>
                <EmailIcon strokeWidth='1' />
                <span>ngkien299@gmail.com</span>
              </li>
              <li className='flex gap-2'>
                <PhoneIcon strokeWidth='1' />
                <span>0818000299</span>
              </li>
              <li className='flex gap-2'>
                <BuildingArcIcon strokeWidth='1' />
                <span>Lo Long Thanh, p. Phu Huu</span>
              </li>
              <li className='flex gap-2'>
                <ClockIcon strokeWidth='1' />
                <span>9:00 - 17:00</span>
              </li>
            </ul>
          </section>
        </div>
        <div className='w-[160px] bg-primary_blue absolute right-0 top-0 bottom-0'></div>
      </div>
    </main>
  );
};

export default ContactPage;
