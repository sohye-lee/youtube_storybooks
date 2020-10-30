import React, { useRef } from 'react';
import styles from './navbar.module.css';
import { faCloudMoon, faCookieBite, faMoon, faStar, faStarAndCrescent } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Navbar = ({onSearch}) => {

    const inputRef = useRef();

    const handleSearch = () => {
        const value = inputRef.current.value;
        console.log(value);
        onSearch(value);
    }
    const onClick = () => [
        handleSearch()
    ];
    const onKeyPress = event => {
        if (event.key === "Enter") {
            handleSearch()
        }
    }
    return (
        <nav className={styles.navbar}>
            <a href={'/'} className={styles.brand}>
                <img className={styles.youtube__logo} src={"/images/logo3.png"} alt={'logo'} /><span className={styles.youtube__logo__append}>STORYBOOKS</span>
            </a>
            <div className={styles.nav__search}>
                <input ref={inputRef} className={styles.search} type="search" placeholder="Search..." onKeyPress={onKeyPress} />
                <button className={styles.submit} onClick={onClick}>
                    <img src={"/images/search.png"} alt="search button"/>
                </button>
            </div>
            <a href={''}><FontAwesomeIcon icon={faStarAndCrescent} className={styles.toggler}/></a>
        </nav>
    )
}

export default Navbar;