import React from 'react'
import styles from './ListAdaptive.module.scss'
import categoryList from '../categoryList.json'
import { IListAdaptiveTypes } from '../../../../types'

export const ListAdaptive: React.FC<IListAdaptiveTypes> = ({ setList }) => {
    return (
        <div className={styles.wrapper} onClick={() => setList('list')}>
            {categoryList.map(item => <a href={item.link} key={item.id} className={styles.listItem}>{item.name}</a>)}
            <button className={styles.closeBtn} onClick={() => setList('list')}>×</button>
        </div>
    )
}
