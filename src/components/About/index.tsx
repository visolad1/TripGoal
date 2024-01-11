// import React from 'react'
import { Container } from '../Container'
import styles from './About.module.scss'
import aboutUsImg from '../../assets/imgs/about-us-img.png'
import { AboutInfoCard } from './AboutInfoCard'

export const About = () => {
    const aboutCardsInfo = [
        {
            id: 0,
            count: '10M+',
            description: 'Visitors'
        },
        {
            id: 1,
            count: '109',
            description: 'Hotels'
        },
        {
            id: 2,
            count: '29',
            description: 'Food Shops'
        },
        {
            id: 3,
            count: '18',
            description: 'Related Spots'
        }
    ]
    return (
        <Container>
            <div className={styles.wrapper} id='about'>
                <div className={styles.info}>
                    <div className={styles.text}>
                        <h5 className={`subtitle ${styles.subtitle}`}>About Us</h5>
                        <h2 className={`title ${styles.title}`}>The Perfect Travel Place For You & Your Family</h2>
                        <p className={styles.p}>how travel can be one of the best tools for personal growth. We share some of the life lessons we've learned on the road that has provided us insight into empathy, mindfulness, meditation, comfort zones, two-way storytelling, being present, connection and more.</p>
                    </div>
                    <div className={styles.cards}>
                        {aboutCardsInfo.map(obj => <div key={obj.id} className={styles.card}><AboutInfoCard obj={obj} /></div>)}
                    </div>
                </div>
                <img src={aboutUsImg} alt="img" className={styles.img} />
            </div>
        </Container>
    )
}
