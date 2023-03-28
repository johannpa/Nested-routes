import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './ProductsNav.module.css';

const productLink = [
    {
        name: "JRPGS",
        to: "jrpgs"
    },
    {
        name: "Anime",
        to: "anime"
    }
]

const ProductsNav = () => {
  return (
    <div>
      <nav className={styles.navContainer}>
        <ul className={styles.ul}>
            {
                productLink.map((value) => {
                    return(
                        <li>
                            <NavLink to={value.to} className={styles.NavLink}>
                                {value.name}
                            </NavLink>
                        </li>
                    )
                })
            }
        </ul>
      </nav>
    </div>
  )
}

export default ProductsNav;
