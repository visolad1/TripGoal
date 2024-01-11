// import React from 'react'
import styles from './BookNow.module.scss'
import bookIcon from '../../assets/imgs/book-icon.svg'

export const BookNow = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.selectsWrapper}>
                <div>
                    <select className={styles.select} name="location" id="book-location-select">
                        <option className={styles.option} value="">Location</option>
                        <option className={styles.option} value="">Location 1</option>
                        <option className={styles.option} value="">Location 2</option>
                        <option className={styles.option} value="">Location 3</option>
                    </select>
                    <p>select</p>
                </div>

                <div>
                    <select className={styles.select} name="category" id="book-category-select">
                        <option className={styles.option} value="">Your Category</option>
                        <option className={styles.option} value="">Category 1</option>
                        <option className={styles.option} value="">Category 2</option>
                        <option className={styles.option} value="">Category 3</option>
                    </select>
                    <p>select</p>
                </div>

                <div>
                    <select className={styles.select} name="total-person" id="total-person">
                        <option className={styles.option} value="">Total Person</option>
                        <option className={styles.option} value="">1</option>
                        <option className={styles.option} value="">2</option>
                        <option className={styles.option} value="">3</option>
                    </select>
                    <p>select</p>
                </div>
            </div>
            <button className={styles.btn}>
                <img src={bookIcon} alt="icon" />
                <span>Book now</span>
            </button>
        </div>
    )
}
