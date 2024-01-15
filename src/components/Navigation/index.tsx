import React from 'react'
import styles from './Navigation.module.scss'
import logo from '../../assets/imgs/Logo.svg'
import { Container } from '../Container'
import categoryList from './categoryList.json'
import { ListAdaptive } from './ListAdaptive'

export const Navigation = () => {
    const [list, setList] = React.useState('list')

    React.useEffect(() => {
        if (list === 'adaptive') {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [list])

    return (
        <div className={styles.wrapper} id='home'>
            <Container>
                <nav className={styles.nav}>
                    <button className={styles.burger} onClick={() => setList('adaptive')}>|||</button>
                    {list === 'adaptive' && <ListAdaptive setList={setList} />}
                    <a href="/" className={styles.logoLink}><img src={logo} alt="logo" className={styles.logo} /></a>
                    <ul className={styles.list}>
                        {categoryList.map(category =>
                            <li className={styles.listItem} key={category.id}>
                                <a href={category.link}>{category.name}</a>
                            </li>)}
                    </ul>
                    <button className={`${styles.btn} btn-blue`}>Register</button>
                </nav>
            </Container>
        </div>
    )
}
