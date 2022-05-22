import { useContext } from "react";
import logo from "img/main.png";
import styles from "./Header.module.scss";
import { UserContext } from "contexts";
import { Navigate } from "react-router-dom";

const Header = () => {
  const currentUser = useContext(UserContext);
  console.log(currentUser);
  const fullName = `${currentUser[1].firstName} ${currentUser[1].lastName}`;

  const LogOut = () => {
    <Navigate to="/" />;
  };

  return (
    <header className={styles.container}>
      <div className={styles.imgWrapper}>
        <img className={styles.img} src={logo} alt="unistudy" />
        <p className={styles.heading}>UNISTUDY</p>
      </div>
      <div className={styles.userContainer}>
        <p className={styles.userName}>{fullName}</p>
        <img
          className={styles.userImg}
          src={currentUser[1].imgSrc}
          alt={fullName}
        />
      </div>
      <button className={styles.btnLogOut} onClick={() => LogOut()}>
        Вихід
      </button>
    </header>
  );
};

export default Header;
