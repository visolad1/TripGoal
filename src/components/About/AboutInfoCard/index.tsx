import React from 'react'
import styles from './AboutInfoCard.module.scss'
import { IAboutInfoCardTypes } from '../../../../types'

export const AboutInfoCard: React.FC<IAboutInfoCardTypes> = ({ obj }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.count}>{obj.count}</div>
            <div className={styles.description}>{obj.description}</div>
        </div>
    )
}
