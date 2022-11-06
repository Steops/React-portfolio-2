import React from 'react';
import { useState } from 'react';
import './assets/scss/index.scss';

import { Header } from './components/Header';
import { About } from './components/About';
import { Layout } from './components/Layout';

const App = () => {
  const [page, setPage] = useState('about');
  return (
    <Layout setPage={setPage}>
      {page === 'about' && <About />}
      {page === 'skills' && <div>blblbl</div>}
    </Layout>
  );
};

export default App;
