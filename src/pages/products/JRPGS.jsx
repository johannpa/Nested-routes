import React from 'react';
import styles from './Products.module.css';

const gameList = [
    "Persona 5",
    "Tales of the Abyss",
    "Chrono Trigger"
]

const JRPGS = () => {
  return (
    <div>
      <ul className={styles.ul}>
        {
            gameList.map((game) => {
                return (
                    <li>
                        {game}
                    </li>
                )
            }
        )}
      </ul>
    </div>
  )
}

export default JRPGS;
