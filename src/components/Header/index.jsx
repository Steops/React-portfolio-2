import React from 'react';

const data = [
  { title: 'about' },
  { title: 'skills' },
  { title: 'services' },
  { title: 'portfolio' },
];

const Header = ({ setPage }) => {
  return (
    <header className='header'>
      <span className='header__logo'>Steops</span>
      <nav className='header__navigation'>
        {data.map((item, index) => (
          <span
            className='navigation__item'
            key={index}
            onClick={() => setPage(item.title)}
          >
            {item.title}
          </span>
        ))}
      </nav>
    </header>
  );
};
export { Header };
