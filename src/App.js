import React from 'react';
import { useState } from 'react';
import './assets/scss/index.scss';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Layout } from './components/Layout';
import { Portfolio } from './components/Portfolio';

const App = () => {
  const [page, setPage] = useState('about');
  return (
    <Layout setPage={setPage} page={page}>
      {page === 'about' && <About />}
      {page === 'skills' && <Skills />}
      {page === 'portfolio' && <Portfolio />}
    </Layout>
  );
};

export default App;
