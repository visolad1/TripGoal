import React from 'react'
import styles from './TestimonialCard.module.scss'
import { ITestimonialCardTypes } from '../../../../types'
import testimonialsIcon from '../../../assets/imgs/testimonials-icon.svg'

export const TestimonialCard: React.FC<ITestimonialCardTypes> = ({ obj }) => {
    return (
        <div className={styles.wrapper}>
            <img src={testimonialsIcon} alt="icon" className={styles.testimonialsIcon} />
            <p className={styles.testimonials}>{obj.testimonial}</p>
            <div className={styles.name}>{obj.name}</div>
            <p className={styles.designation}>{obj.designation}</p>
        </div>
    )
}
