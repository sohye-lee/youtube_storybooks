import React from 'react';
import styles from './navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <img className={styles.logo} src={"/public/logo2.png"} />
            <ul className={styles.navbar__menu}>
                <li className={styles.navbar__item}><input className={styles.search}/></li>
                <li className={styles.navbar__item}></li>
            </ul>
            <a className={styles.hamburger}><i className="fas fa-hamburger"></i></a>
        </nav>
    )
}

export default Navbar;