import React from 'react';

const data = [{ title: 'about' }, { title: 'skills' }, { title: 'portfolio' }];

const Header = ({ page, setPage }) => {
  return (
    <header className='header'>
      <div className='header__logo'>
        <h1 className='header__h1'>ReactPortfolio</h1>
        <h1 className='header__h1'>ReactPortfolio</h1>
      </div>
      <nav className='header__navigation'>
        {data.map((item, index) => (
          <span
            className={`navigation__item ${
              page === item.title ? '--active' : ''
            }`}
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
