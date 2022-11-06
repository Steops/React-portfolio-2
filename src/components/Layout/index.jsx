import React from 'react';
import { Header } from '../../components/Header';
import { Aside } from '../../components/Aside';

const Layout = ({ children, setPage }) => {
  return (
    <div className='layout'>
      <Header setPage={setPage} />
      <div className='page-content'>
        <Aside />
        {children}
      </div>
    </div>
  );
};
export { Layout };
