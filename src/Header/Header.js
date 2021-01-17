import React from 'react';
import style from './Header.module.css';
import Menu from "./Menu";

function Header() {
  return (
    <div className={style.header}>
      <Menu/>
    </div>
  );
}

export default Header;
