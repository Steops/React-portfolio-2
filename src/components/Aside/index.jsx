import React from 'react';
import Avatar from '../../assets/images/Avatar.jpg';
import Github from '../../assets/images/Github.svg';
import VK from '../../assets/images/VK.svg';
import WhatsApp from '../../assets/images/WhatsApp.svg';
import Telegram from '../../assets/images/Telegram.svg';

const Aside = () => {
  return (
    <aside className='aside'>
      <div className='aside__avatar'>
        <img src={Avatar} alt='avatar' className='avatar'></img>
      </div>
      <span className='aside__name'>Stepan Polyakov</span>
      <span className='aside__profession'>Frontend Developer</span>
      <span className='aside__description'>
        High level experience in web design and development knowledge.
      </span>
      <div className='aside__profiles'>
        <a
          href='https://github.com/Steops'
          className='aside__social-link'
          target='_blank'
          rel='noreferrer'
        >
          <img src={Github} alt='Github' className='aside__social'></img>
        </a>
        <a
          href='https://vk.com/stepan_polyakov'
          className='aside__social-link'
          target='_blank'
          rel='noreferrer'
        >
          <img src={VK} alt='VK' className='aside__social'></img>
        </a>
        <a
          href='https://wa.me/79032809899'
          className='aside__social-link'
          target='_blank'
          rel='noreferrer'
        >
          <img src={WhatsApp} alt='WhatsApp' className='aside__social'></img>
        </a>
        <a
          href='https://t.me/steops36'
          className='aside__social-link'
          target='_blank'
          rel='noreferrer'
        >
          <img src={Telegram} alt='Telegram' className='aside__social'></img>
        </a>
      </div>
      <div className='aside__button'>Contact me</div>
    </aside>
  );
};

export { Aside };
