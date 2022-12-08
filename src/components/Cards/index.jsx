import React, { useState } from 'react';
import Calendar from '../../assets/images/Calendar.svg';
import MPEI from '../../assets/images/MPEI.jpeg';

const data = [
  {
    name: 'Bachelour Student',
    place: 'MPEI',
    date: '2017-2021',
    description: 'ggggggg',
    src: MPEI,
    alt: 'MPEI',
  },
  {
    name: 'Masters degree Student',
    place: 'MPEI',
    date: '2021-2023',
    description: 'hhhhhhhh',
    src: MPEI,
    alt: 'MPEI',
  },
  {
    name: 'Web-developer Student',
    place: 'Nikolaev inc.',
    date: '2022-2022',
    description: 'ggggggg',
    src: MPEI,
    alt: 'MPEI',
  },
];

const Cards = () => {
  const [card, setCard] = useState(data[0]);

  return (
    <div className='about-page__qualification'>
      <div className='about-page__qual-cards'>
        {data.map((item, index) => (
          <div
            className={`about-page__qual-card ${
              card === item ? '--active' : ''
            }`}
            key={index}
            onClick={() => setCard(item)}
          >
            <div className='about-page__name'> {item.name}</div>
            <div className='about-page__place'>{item.place}</div>
            <div className='about-page__date-container'>
              <img src={Calendar} alt='Calendar' className='Calendar' />
              <div className='about-page__date'>{item.date}</div>
            </div>
          </div>
        ))}
      </div>
      <div className='about-page__qual-info'>
        <span className='about-page__qual-description'>{card.description}</span>
        <img src={card.src} alt={card.alt} className='about-page__qual-photo' />
      </div>
    </div>
  );
};

export { Cards };
