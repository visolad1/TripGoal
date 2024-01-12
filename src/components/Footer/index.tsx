// import React from 'react'
import { Container } from '../Container'
import styles from './Footer.module.scss'

export const Footer = () => {
    const footerList = [
        { id: 0, name: 'Home', link: '#home' },
        { id: 1, name: 'About', link: '#about' },
        { id: 2, name: 'Packages', link: '#' },
        { id: 3, name: 'Contact Us', link: '#contact-us' },
        { id: 4, name: 'FAQ', link: '#' }
    ]
    return (
        <Container>
            <ul className={styles.list}>
                {footerList.map(item => <li key={item.id}><a href={item.link}>{item.name}</a></li>)}
            </ul>
            <div className={styles.line}></div>
            <p className={styles.copyrights}> © 2021. All copyrights reserved by RH Agency</p>
        </Container>
    )
}
