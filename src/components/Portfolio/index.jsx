import React from 'react';
import { ProjectSlider } from '../ProjectSlider';

const Portfolio = () => {
  return (
    <main className='portfolio'>
      <h1 className='portfolio__title'>Portfolio</h1>
      <h2 className='portfolio__subtitle'>My recent work</h2>
      <ProjectSlider />
    </main>
  );
};
export { Portfolio };
