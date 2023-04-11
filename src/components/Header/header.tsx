import React, { FC } from 'react';
import './header.css';

type HeaderProps = {
  title: string;
  subtitle: string;
};

const Header: FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <header>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </header>
  );
};

export default Header;
