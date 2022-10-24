import React, { useEffect } from "react";
import logo from "img/main.png";
import styles from "./Header.module.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData, signOut } from "redux/features/auth/authThunk";

const Header = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  
  const { userData } = useSelector((state) => state.auth);
  const fullName = `${userData.firstName} ${userData.lastName}`;
  const currentUserRole = `${userData.role}`;
  const navigate = useNavigate();

  const toCourses = () => {
    navigate(`/${currentUserRole}`);
  };

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
        {/* <img
          className={styles.userImg}
          src={currentUser[1].imgSrc}
          alt={fullName}
        /> */}
      </div>
      <button className={styles.btnLogOut} onClick={() => dispatch(signOut())}>
        Вихід
      </button>
    </header>
  );
};

export default Header;
