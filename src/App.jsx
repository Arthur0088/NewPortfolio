
import styles from './App.module.css'
import { About } from './componets/About/About'
import { Home } from './componets/Home/Home'
import { Navbar } from './componets/Navbar/Navbar'
import { Skills } from './componets/Skills/Skills'
import { Projects } from './componets/Projects/Projects'
import { Contact } from './componets/Contact/Contact'

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
