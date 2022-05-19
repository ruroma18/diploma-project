import {useContext} from 'react';
import logo from 'img/main.png'
import styles from './Header.module.scss'
import { UserContext } from 'contexts';

const Header = () => {
  const currentUser = useContext(UserContext);
  console.log(currentUser)
  const fullName = `${currentUser[1].firstName} ${currentUser[1].lastName}`;

  return (
    <header className={styles.container}>
      <div className={styles.imgWrapper}>
        <img className={styles.img} src={logo} alt="unistudy" />
        <p className={styles.heading}>UNISTUDY</p>
      </div>
      <div className={styles.userContainer}>
        <p className={styles.userName}>{fullName}</p>
        <img className={styles.userImg} src={currentUser[1].imgSrc} alt={fullName} />
      </div>
      <button className={styles.btnLogOut}>Вихід</button>
    </header>
  );
}

export default Header;
