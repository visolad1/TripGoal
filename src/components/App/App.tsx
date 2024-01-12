import { Navigation } from '../Navigation'
import { Main } from '../Main'
import { BookNow } from '../BookNow'
import styles from './App.module.scss'
import { InfoSection } from '../InfoSection'
import { Location } from '../Location'
import { About } from '../About'
import { Testimonials } from '../Testimonials'
import { SocialFeed } from '../SocialFeed'
import { ContactUs } from '../ContactUs'
import { Footer } from '../Footer'

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
      <ContactUs />
      <Footer />
    </>
  )
}

export default App
