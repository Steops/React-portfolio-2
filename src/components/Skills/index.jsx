import React from 'react';
import HTMLIcon from '../../assets/images/HTMLIcon.svg';
import CSSIcon from '../../assets/images/CSSIcon.svg';
import ReactIcon from '../../assets/images/ReactIcon.svg';
import JSIcon from '../../assets/images/JSIcon.svg';
import FigmaIcon from '../../assets/images/FigmaIcon.svg';
import HTMLPercent from '../../assets/images/90HTML.svg';
import JSPercent from '../../assets/images/50JS.svg';
import CSSPercent from '../../assets/images/80CSS.svg';
import FigmaPercent from '../../assets/images/90Figma.svg';
import ReactPercent from '../../assets/images/75React.svg';

const Skills = () => {
  const data = [
    {
      scale: HTMLPercent,
      alt: 'HTML90%',
      icon: HTMLIcon,
      tech: 'HTML',
      percent: '90%',
    },
    {
      scale: CSSPercent,
      alt: 'CSS80%',
      icon: CSSIcon,
      tech: 'CSS',
      percent: '80%',
    },

    {
      scale: JSPercent,
      alt: 'JS50%',
      icon: JSIcon,
      tech: 'JavaScript',
      percent: '50%',
    },

    {
      scale: FigmaPercent,
      alt: 'Figma90%',
      icon: FigmaIcon,
      tech: 'Figma',
      percent: '90%',
    },

    {
      scale: ReactPercent,
      alt: 'React75%',
      icon: ReactIcon,
      tech: 'React',
      percent: '75%',
    },
  ];
  return (
    <main className='skills-page'>
      <h1 className='skills-page__title'>Skills</h1>
      <h2 className='skills-page__subtitle'>My technical level</h2>

      <div className='skills-page__ability-list'>
        {data.map((item, index) => (
          <div className='skills-page__ability scale-animation'>
            <div className='skills-page__wave'>
              <img
                src={item.scale}
                alt={item.alt}
                className='skills-page__scale wave-animation-1'
                key={index}
              />

              <img
                src={item.scale}
                alt={item.alt}
                className='skills-page__scale wave-animation-2'
                key={index}
              />
            </div>

            <img
              src={item.icon}
              alt={item.tech}
              className='skills-page__icon'
            />
            <div className='skills-page__description'>
              <span className='skills-page__tech'>{item.tech}</span>
              <span className='skills-page__percent'>{item.percent}</span>
            </div>
          </div>
        ))}
      </div>

      <h2 className='skills-page__subtitle'>My soft skills</h2>
      <div className='skills-page__soft-list'>
        <div className='skills-page__soft'> Organization </div>
        <div className='skills-page__soft'> Government </div>
      </div>
    </main>
  );
};
export { Skills };
