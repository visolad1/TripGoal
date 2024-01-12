import { Navigation } from '../Navigation'
import { Main } from '../Main'
import { BookNow } from '../BookNow'
import styles from './App.module.scss'
import { InfoSection } from '../InfoSection'
import { Location } from '../Location'
import { About } from '../About'
import { Testimonials } from '../Testimonials'
import { SocialFeed } from '../SocialFeed'

function App() {

  return (
    <>
      <Navigation />
      <Main />
      <div className={styles.bookNow}><BookNow /></div>
      <InfoSection />
      <Location />
      <About />
      <Testimonials />
      <SocialFeed />
    </>
  )
}

export default App
