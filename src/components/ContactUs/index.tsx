// import React from 'react'
import styles from './ContactUs.module.scss'
import { Container } from '../Container'
import logo from '../../assets/imgs/Logo.svg'

export const ContactUs = () => {
    return (
        <Container>
            <div className={styles.wrapper} id='contact-us'>
                <a href="#home"><img src={logo} alt="logo" /></a>
                <div className={styles.contactUs}>
                    <h5 className={`subtitle ${styles.subtitle}`}>Contact Us</h5>
                    <h2 className={`title ${styles.title}`}>Do You Have Any Questions?</h2>
                    <button className={`btn-blue ${styles.btn}`}>Contact Us</button>
                </div>
            </div>
        </Container>
    )
}
