// import { useState } from "react";

import styles from "./Header.module.scss";
import { Link } from "react-router";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.imgContainer}>
          <img src="/logo.png" alt="logo" />
        </div>
        <div className={styles.menuContainer}>
          <div className={styles.listMenuContainer}>
            <ul className={styles.listMenu}>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <Link className="btnAwards" to="/Trips">
                  Trips
                </Link>
              </li>
              <li>
                <Link className="btnCertificates" to="/About">
                  About
                </Link>
              </li>
              <li>
                <Link className="btnCertificates" to="/Blogs">
                  Blogs
                </Link>
              </li>
              <li>
                <Link className="btnContact" to="/Contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
