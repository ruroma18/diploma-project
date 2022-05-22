import { useContext } from "react";
import logo from "img/main.png";
import styles from "./Header.module.scss";
import { UserContext } from "contexts";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const currentUser = useContext(UserContext);
  console.log(currentUser);
  const fullName = `${currentUser[1].firstName} ${currentUser[1].lastName}`;
  const navigate = useNavigate();

  const logOut = () => {
    navigate("/")
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
      <button className={styles.btnLogOut} onClick={logOut}>
        Вихід
      </button>
    </header>
  );
};

export default Header;
