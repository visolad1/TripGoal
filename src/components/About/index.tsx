// import React from 'react'
import styles from './About.module.scss'

export const About = () => {
    return (
        <div className={styles.wrapper} id='about'>
            <div className={styles.info}>
                <h5 className={`subtitle ${styles.subtitle}`}>About Us</h5>
                <h2 className={`title ${styles.title}`}>The Perfect Travel Place For You & Your Family</h2>
            </div>
        </div>
    )
}
