import React from 'react';
import Fire from '../../assets/images/Fire.svg';
import Folders from '../../assets/images/Folders.svg';
import House from '../../assets/images/House.svg';
import Education from '../../assets/images/Education.svg';

import { Cards } from '../../components/Cards';
import { Slider } from '../../components/Slider';
const About = () => {
  return (
    <main className='about-page'>
      <div className='about-page__content'>
        <div className='about-page__experience'>
          <div className='about-page__experience-content'>
            <h1 className='about-page__title'>About</h1>
            <span className='about-page__text'>
              Web developer, with extensive knowledge and years of experience,
              working in web technologies and UI/UX design, delivering quality
              work.
            </span>
            <div className='about-page__cards'>
              <div className='about-page__cards-item'>
                <img src={Fire} alt='Fire' className='about-page__icon'></img>
                <div className='about-page__text-content'>
                  <span className='about-page__info'>
                    Years <br />
                    old
                  </span>
                  <span className='about-page__number'>23</span>
                </div>
              </div>
              <div className='about-page__cards-item'>
                <img
                  src={Folders}
                  alt='Foldes'
                  className='about-page__icon'
                ></img>
                <div className='about-page__text-content'>
                  <span className='about-page__info'>Completed projects</span>
                  <span className='about-page__number'>3</span>
                </div>
              </div>
              <div className='about-page__cards-item'>
                <img src={House} alt='House' className='about-page__icon'></img>
                <div className='about-page__text-content'>
                  <span className='about-page__info'>Compaines worked</span>
                  <span className='about-page__number'>1</span>
                </div>
              </div>
            </div>
          </div>
          <Slider />
        </div>

        <div className='about-page__qual'>
          <h1 className='about-page__title'>Qualification</h1>

          <div className='about-page__qual-section'>
            <div className='about-page__education'>
              <img src={Education} alt='education' className='Education'></img>
              <span className='about-page__qual-title'>Education</span>
            </div>
          </div>

          <Cards />
        </div>
      </div>
    </main>
  );
};
export { About };
