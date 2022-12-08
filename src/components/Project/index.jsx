import React from 'react';

const Project = ({ data }) => {
  return (
    <div className='project'>
      {data.map((item, index) => (
        <div className='project__container'>
          <div className='project__img-container'>
            <img src={item.img} alt='project-img' className='project__img' />
          </div>
          <div className='project__text-content'>
            <h1 className='project__title'>{item.title}</h1>
            <span className='project__description'>{item.description}</span>
            <a
              href={item.github}
              className='project__link --git'
              target='_blank'
              rel='noreferrer'
            >
              GitHub
            </a>
            <a
              href={item.versel}
              className='project__link --versel'
              target='_blank'
              rel='noreferrer'
            >
              Versel
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export { Project };
