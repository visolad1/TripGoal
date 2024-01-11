// import React from 'react';
import { Container } from '../Container';
import styles from './Location.module.scss'
import locationIndonesiaImg from '../../assets/imgs/location-indonesia.png'
import locationJapanImg from '../../assets/imgs/location-japan.png'
import locationItalyImg from '../../assets/imgs/location-italy.png'
import { LocationCard } from './LocationCard';

export const Location = () => {
  const locationsInfo = [
    {
      id: 0,
      title: 'Bali Handara Gate',
      location: 'Indonesia',
      rating: 5,
      price: '$1200',
      img: locationIndonesiaImg
    },
    {
      id: 1,
      title: 'Buddhist shrine',
      location: 'Tokyo, Japan',
      rating: 5,
      price: '$1200',
      img: locationJapanImg
    },
    {
      id: 2,
      title: 'Rialto Bridge',
      location: 'Italy',
      rating: 5,
      price: '$1200',
      img: locationItalyImg
    }
  ]
  return (
    <div id='location' className={styles.wrapper}>
      <Container>
        <div className={styles.text}>
          <h4 className={`subtitle ${styles.subtitle}`}>Location</h4>
          <h2 className={`title ${styles.title}`}>Suggested Location</h2>
          <p className={styles.p}>Travel is my life. Since 1999, I’ve been traveling around the world nonstop. If you also love travel, you’re in the right place!</p>
        </div>
        <div className={styles.cards}>
          {locationsInfo.map(obj => <div className={styles.card} key={obj.id}><LocationCard obj={obj} /></div>)}
        </div>
      </Container>
    </div>
  )
};
