import React, { useState } from 'react';
import { Project } from '../Project/index';
import arrowRight from '../../assets/images/arrow-right.svg';
import arrowLeft from '../../assets/images/arrow-left.svg';
import project1 from '../../assets/images/project1.PNG';
import project2 from '../../assets/images/project2.png';

const data = [
  {
    img: project1,
    title: 'Modern Website',
    description:
      'Website adaptable to all devices, with UI components and animated interactions',
    github: 'https://github.com/Steops/Design-Site-Design',
    versel: 'https://project-1-flame.vercel.app/',
  },
  {
    img: project2,
    title: 'Escape Dungeon',
    description:
      'Very beuatiful website i love this is gods tvorenie very big and fuck you voobshem',
    github: 'https://github.com/Steops/JailBirthday',
    versel: 'https://escapedungeon.vercel.app/',
  },
];

const ProjectSlider = () => {
  const PAGE_WIDTH = 1250;
  const maxOffset = -(PAGE_WIDTH * (data.length - 1));
  const [offset, setOffset] = useState(0);
  const handleLeftArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + PAGE_WIDTH;
      return newOffset;
    });
  };
  const handleRightArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - PAGE_WIDTH;
      return Math.max(newOffset, maxOffset);
    });
  };
  return (
    <div className='project-slider'>
      <div
        className={`project-slider__arrow-left ${
          offset === 0 ? '--disabled' : ''
        }`}
        onClick={offset === 0 ? null : handleLeftArrowClick}
      >
        <img
          src={arrowLeft}
          alt='arrowLeft'
          className='project-slider__arrow'
        />
      </div>
      <div className='project-slider__window'>
        <div
          className='project-slider__container'
          style={{ transform: `translateX(${offset}px)` }}
        >
          <div className='project-slider__item'>
            <Project data={data} />
          </div>
        </div>
      </div>
      <div
        className={`project-slider__arrow-right ${
          offset === maxOffset ? '--disabled' : ''
        }`}
        onClick={handleRightArrowClick}
      >
        <img
          src={arrowRight}
          alt='arrowRight'
          className='project-slider__arrow'
        />
      </div>
    </div>
  );
};

export { ProjectSlider };
