import React from 'react'
import styles from './InfoCard.module.scss'
import { IInfoCardTypes } from '../../../../types'

export const InfoCard: React.FC<IInfoCardTypes> = ({ obj }) => {
    return (
        <div className={styles.wrapper}>
            <img src={obj.img} alt="img" />
            <div className={styles.text}>
                <h5 className={`title ${styles.title}`}>{obj.title}</h5>
                <p className={styles.p}>{obj.description}</p>
            </div>
        </div>
    )
}
