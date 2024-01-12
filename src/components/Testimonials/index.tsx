// import React from 'react'
import styles from './Testimonials.module.scss'
import { Container } from '../Container'
import mapImg from '../../assets/imgs/map-img.svg'
import user1 from '../../assets/imgs/user-img-1.png'
import user2 from '../../assets/imgs/user-img-2.png'
import user3 from '../../assets/imgs/user-img-3.png'
import user4 from '../../assets/imgs/user-img-4.png'
import user5 from '../../assets/imgs/user-img-5.png'
import user6 from '../../assets/imgs/user-img-6.png'
import user7 from '../../assets/imgs/user-img-7.png'
import user8 from '../../assets/imgs/user-img-8.png'
import { TestimonialCard } from './TestimonialCard'

export const Testimonials = () => {
    const userImages = [user1, user2, user3, user4, user5, user6, user7, user8];
    const testimonialsInfo = [
        {
            'id': 0,
            'testimonial': 'I had an amazing experience exploring various destinations through this platform. Highly recommended for its comfort and excellent service.',
            'name': 'Alice M. Johnson',
            'designation': 'Explorer'
        },
        {
            'id': 1,
            'testimonial': 'My travel journey with this platform has been exceptional. Its my go- to choice for its comfort and outstanding service.',
            'name': 'Emily K. Davis',
            'designation': 'Voyager'
        },
        {
            'id': 2,
            'testimonial': 'Exploring different destinations has been a delight with this platform. I highly recommend it for its comfort and top-notch service.',
            'name': 'John P. Anderson',
            'designation': 'Adventurer'
        }

    ]
    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.text}>
                    <h5 className={`subtitle ${styles.subtitle}`}>Testimonials</h5>
                    <h2 className={`title ${styles.title}`}>What Our Customer Say About Us</h2>
                    <p className={styles.p}>What customers says about our service and guideline. Customers compliment is most important to upgradation of bussiness service </p>
                </div>
                <div className={styles.map}>
                    <img src={mapImg} alt="map img" />
                    <div className={styles.users}>
                        {userImages.map((img, i) => <img src={img} alt='user img' className={`${styles.user} ${styles[`user${i + 1}`]}`} />)}
                    </div>
                    <div className={styles.testimonials}>
                        <TestimonialCard obj={testimonialsInfo[0]} />
                    </div>
                </div>
            </Container>
        </div>
    )
}
