// import React from 'react'
import { Container } from '../Container'
import styles from './SocialFeed.module.scss'
import Slider from 'react-slick'
import img1 from '../../assets/imgs/social-feed-img-1.png'
import img2 from '../../assets/imgs/social-feed-img-2.png'
import img3 from '../../assets/imgs/social-feed-img-3.png'
import img4 from '../../assets/imgs/social-feed-img-4.png'
import img5 from '../../assets/imgs/social-feed-img-5.png'

export const SocialFeed = () => {
    const imgs = [img1, img2, img3, img4, img5, img2]
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        pauseOnHover: false,
        autoplaySpeed: 2000,
    };
    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.flexWrapper}>
                    <div className={styles.text}>
                        <h5 className={`subtitle ${styles.subtitle}`}>Social Feed</h5>
                        <h2 className={`title ${styles.title}`}>Check Our Instagram Profile</h2>
                    </div>
                    <button className={`btn-blue ${styles.btn}`}>Follow Us</button>
                </div>
            </Container>
            <div className={styles.sliderWrapper}>
                <Slider {...settings}>
                    {imgs.map((img, i) => <img src={img} key={i} alt='img' className={styles.slide} />)}
                </Slider>
            </div>
        </div>
    )
}
