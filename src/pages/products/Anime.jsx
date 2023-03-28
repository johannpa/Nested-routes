import React from 'react';
import styles from './Products.module.css';

const animeList = [
    "Dusk Maiden of Amnesia",
    "Psycho Pass",
    "Outlaw Star"
]

const Anime = () => {
  return (
    <div>
      <ul className={styles.ul}>
        {
            animeList.map((anime) => {
                return (
                    <li>
                        {anime}
                    </li>
                )
            })
        }
      </ul>
    </div>
  )
}

export default Anime;
