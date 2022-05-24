import { useContext } from "react";
import logo from "img/main.png";
import styles from "./Header.module.scss";
import { UserContext } from "contexts";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const currentUser = useContext(UserContext);
  const fullName = `${currentUser[1].firstName} ${currentUser[1].lastName}`;
  const currentUserRole = `${currentUser[1].role}`;
  const navigate = useNavigate();
  console.log(currentUserRole)

  const logOut = () => {
    navigate("/");
  };

  const toCourses = () => {
    navigate(`/${currentUserRole}`)
  }

  return (
    <header className={styles.container}>
      <div className={styles.imgWrapper}>
        <img className={styles.img} src={logo} alt="unistudy" />
        <p className={styles.heading}>UNISTUDY</p>
      </div>
      <nav className={styles.coursesHeading}>
        <ul>
          <li onClick={toCourses}>Мої курси</li>
        </ul>
      </nav>
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
