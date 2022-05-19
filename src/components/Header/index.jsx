import React from 'react';
import logo from 'img/main.png'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.imgWrapper}>
        <img className={styles.img} src={logo} alt="unistudy" />
        <p className={styles.heading}>UNISTUDY</p>
      </div>
      <button className={styles.btnLogOut}>Вихід</button>
    </header>
  );
}

export default Header;
