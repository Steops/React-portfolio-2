import React from 'react';
import Avatar from '../../assets/images/Avatar.jpg';
import Inst from '../../assets/images/Instagram.svg';
import Github from '../../assets/images/Github.svg';

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
        <img src={Inst} alt='Instagram' className='aside__social'></img>
        <img src={Github} alt='Github' className='aside__social'></img>
        <img src={Inst} alt='Instagram' className='aside__social'></img>
        <img src={Github} alt='Github' className='aside__social'></img>
        <img src={Inst} alt='Instagram' className='aside__social'></img>
      </div>
      <div className='aside__button'>Contact me</div>
    </aside>
  );
};

export { Aside };
