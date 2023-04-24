import React from 'react';
import './Layout.styles.scss';
import Navbar from '../Navbar/Navbar.component';
import Footer from '../Footer/Footer.component';

const Layout = ({ children, sidebar }: any) => {
  return (
    <div className='layout-wrapper'>
      <Navbar />
      {sidebar ? (
        <main className='h-full flex bg-[#f5f5f5]'>
          {sidebar}
          {children}
        </main>
      ) : (
        children
      )}
      <Footer />
    </div>
  );
};

export default Layout;
