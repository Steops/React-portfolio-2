import React from 'react';
import Fire from '../../assets/images/Fire.svg';
import Folders from '../../assets/images/Folders.svg';
import House from '../../assets/images/House.svg';
import Education from '../../assets/images/Education.svg';
import Work from '../../assets/images/Work.svg';
import Calendar from '../../assets/images/Calendar.svg';
import { Aside } from '../Aside/index';
const About = () => {
  return (
    <main className='about-page'>
      <div className='about-page__content'>
        <div className='about-page__experience'>
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
                <span className='about-page__number'>1</span>
              </div>
            </div>
            <div className='about-page__cards-item'>
              <img src={House} alt='House' className='about-page__icon'></img>
              <div className='about-page__text-content'>
                <span className='about-page__info'>Compaines worked</span>
                <span className='about-page__number'>0</span>
              </div>
            </div>
          </div>
        </div>
        <div className='about-page__qual'>
          <h1 className='about-page__title'>Qualification</h1>

          <div className='about-page__qual-section'>
            <div className='about-page__education'>
              <img src={Education} alt='education' className='Education'></img>
              <span className='about-page__qual-title'>Education</span>
            </div>

            <div className='about-page__education'>
              <img src={Work} alt='work' className='Work'></img>
              <span className='about-page__qual-title'>Work</span>
            </div>
          </div>

          <div className='about-page__qual-cards'>
            <div className='about-page__qual-card'>
              <div className='about-page__what'>Bachelour Student</div>
              <div className='about-page__where'>MPEI</div>
              <div className='about-page__when'>
                <img src={Calendar} alt='Calendar' className='Calendar'></img>
                <div className='about-page__date'>2017-2021</div>
              </div>
            </div>

            <div className='about-page__qual-card'>
              <div className='about-page__what'>
                {' '}
                Master's degree&nbsp; Student
              </div>
              <div className='about-page__where'>MPEI</div>
              <div className='about-page__when'>
                <img src={Calendar} alt='Calendar' className='Calendar'></img>
                <div className='about-page__date'>2021-2022</div>
              </div>
            </div>

            <div className='about-page__qual-card'>
              <div className='about-page__what'>
                Web-developer &nbsp; Student
              </div>
              <div className='about-page__where'>Nikolaev inc.</div>
              <div className='about-page__when'>
                <img src={Calendar} alt='Calendar' className='Calendar'></img>
                <div className='about-page__date'>2022-2022</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export { About };
