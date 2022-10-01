import React from 'react';
import { useLocation } from 'react-router-dom';
import { Hero, BackButton, HeroText } from './styles';

const Menu = () => {
  const { pathname } = useLocation();

  return (
    <Hero className="hero">
      <BackButton
        style={{
          opacity: pathname !== '/' ? 1 : 0,
          pointerEvents: pathname !== '/' ? 'auto' : 'none'
        }}
        to="/"
        >{'<'}</BackButton>
      <HeroText>Dylan Yates</HeroText>
    </Hero>
  );
}

export default Menu;
