import React from 'react';
import '../index.css';
import logo from '../images/logo_white.svg';

export default function Header() {
  return (
    <>
      <header className='header'>
        <img src={logo} alt='Логотип' className='logo' />
      </header>
    </>
  );
}
