import styles from './Navigation.module.scss'
import logo from '../../assets/imgs/Logo.svg'
import { Container } from '../Container'

export const Navigation = () => {
    const categoryList = [
        { id: 0, name: 'Home', link: '#home' },
        { id: 1, name: 'About', link: '#about' },
        { id: 2, name: 'Packages', link: '#' },
        { id: 3, name: 'Contact Us', link: '#' },
        { id: 4, name: 'FAQ', link: '#' }
    ]

    return (
        <div className={styles.wrapper} id='home'>
            <Container>
                <nav className={styles.nav}>
                    <a href="/"><img src={logo} alt="logo" className={styles.logo} /></a>
                    <ul className={styles.list}>
                        {categoryList.map(category =>
                            <li className={styles.listItem}>
                                <a href={category.link}>{category.name}</a>
                            </li>)}
                    </ul>
                    <button className={`${styles.btn} btn-blue`}>Register</button>
                </nav>
            </Container>
        </div>
    )
}
