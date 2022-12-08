import React, { useState } from 'react';
import Photo1 from '../../assets/images/Photo1.JPG';
import Photo2 from '../../assets/images/Photo2.jpg';
import Photo3 from '../../assets/images/Photo3.jpg';
import Photo4 from '../../assets/images/Photo4.jpg';
import { useEffect, memo } from 'react';

const data = [
  { image: Photo1, alt: 'sea', key: '1' },
  { image: Photo2, alt: 'sea', key: '2' },
  { image: Photo3, alt: 'sea', key: '3' },
  { image: Photo4, alt: 'sea', key: '4' },
];

const Slider = memo(() => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCurrent((current) => {
        const result = current === data.length - 1 ? 0 : current + 1;
        return result;
      });
    }, 4000);
    return () => clearInterval();
  }, []);

  const prevImgIndex = current ? current - 1 : data.length - 1;

  const nextImgIndex = current === data.length - 1 ? 0 : current + 1;

  return (
    <div className='slider'>
      <div
        className='slider__image-container slider__image-container_prev'
        key={prevImgIndex}
      >
        <img
          src={data[prevImgIndex].image}
          alt={data[prevImgIndex].alt}
          key={data[prevImgIndex].key}
          className='img'
        />
      </div>
      <div className='slider__image-container' key={current}>
        <img
          src={data[current].image}
          alt={data[current].alt}
          key={data[current].key}
          className='img'
        />
      </div>
      <div
        className='slider__image-container slider__image-container_next'
        key={nextImgIndex}
      >
        <img
          src={data[nextImgIndex].image}
          alt={data[nextImgIndex].alt}
          key={data[nextImgIndex].key}
          className='img'
        />
      </div>
    </div>
  );
});

export { Slider };
