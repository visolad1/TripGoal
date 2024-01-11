import React from 'react'
import styles from './LocationCard.module.scss'
import { ILocationCardTypes } from '../../../../types'
import ratingStar from '../../../assets/imgs/rating-star.svg'

export const LocationCard: React.FC<ILocationCardTypes> = ({ obj }) => {
    const ratingLenght = Array.from({ length: obj.rating }, (_, index) => index + 1);

    return (
        <div className={styles.wrapper}>
            <img src={obj.img} alt="img" className={styles.img} />
            <div className={styles.info}>
                <div className={styles.textWrap}>
                    <h5 className={styles.title}>{obj.title}</h5>
                    <div className={styles.rating}>
                        {ratingLenght.map(i => <img src={ratingStar} alt='star icon' key={i} className={styles.ratingStar} />)}
                    </div>
                </div>
                <div className={styles.textWrap}>
                    <div className={styles.location}>{obj.location}</div>
                    <div className={styles.price}>{obj.price}</div>
                </div>
            </div>
        </div>
    )
}
