import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './MainNav.module.css';

const linkValues = [
    {
        name: 'Home',
        to: ''
    },
    {
        name: 'Products',
        to: 'products'
    },
    {
        name: 'Contact',
        to: 'contact'
    }
]

const MainNav = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.navContainer}>
        <ul className={styles.ul}>
            {linkValues.map((value) => {
                return (
                    <li>
                        <NavLink to={value.to} className={styles.navLinks}>
                            {value.name}
                        </NavLink>
                    </li>
                )
            })}
        </ul>
      </nav>
    </div>
  )
}

export default MainNav;
