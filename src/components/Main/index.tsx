// import React from 'react'
import styles from './Main.module.scss'
import mainImg from '../../assets/imgs/main-img.png'
import { Container } from '../Container'
import startUpIcon from '../../assets/imgs/start-up 1.svg'

export const Main = () => {
    const content = (
        <div className={styles.wrapper}>
            <img src={mainImg} alt="img" className={styles.img} />
            <div className={styles.info}>
                <h4 className={`subtitle ${styles.subtitle}`}>Book Now</h4>
                <h1 className={`title ${styles.title}`}>Let’s Enjoy Your Trip with TripGoal <img src={startUpIcon} alt="icon" className={styles.startUpIcon} /></h1>
                <p className={styles.p}>Thinking of taking a break from every day's busy life? Planning to go out of the country with your loved ones to have some fun and quality time in a cost-effective way?</p>
                <button className={`btn-blue ${styles.btn}`}>Start Now</button>
            </div>
        </div>
    )

    return (
        <main className={styles.main} id='main'>
            <Container>{content}</Container>
        </main>
    )
}
