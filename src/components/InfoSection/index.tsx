// import React from 'react'
import { InfoCard } from './InfoCard'
import styles from './InfoSection.module.scss'
import chatImg from '../../assets/imgs/Chat-info-card.png'
import calendsrImg from '../../assets/imgs/Calendar-info-card.png'
import starImg from '../../assets/imgs/Star-info-card.png'
import { Container } from '../Container'

export const InfoSection = () => {
    const infoCards = [
        {
            id: 0,
            title: 'Tell us what you want to do',
            description: 'Fill out a 2-minute questionnaire about how you like to travel',
            img: chatImg
        },
        {
            id: 1,
            title: 'Share your travel preference',
            description: 'It all happends online,We recommend everything to your vision',
            img: calendsrImg
        },
        {
            id: 2,
            title: 'We’ll give you recommendations',
            description: 'Once you’re happy with your final plan, We handle everything for you',
            img: starImg
        }
    ]
    return (
        <div className={styles.wrapper}>
            <div className={styles.info}>
                <h4 className={`subtitle ${styles.subtitle}`}>3 steps for the perfect trip</h4>
                <h2 className={`title ${styles.title}`}>Find travel perfection</h2>
                <p className={styles.p}>Naturally head of the class whenit comes to luxury travel  planning,bbecause we do more homework than anyone else</p>
            </div>
            <Container>
                <div className={styles.cards}>
                    {infoCards.map(obj => <div className={styles.card} key={obj.id}><InfoCard obj={obj} /></div>)}
                </div>
            </Container>
        </div>
    )
}
