import Sidebar from "../Sidebar/Sidebar"
import styles from './LandingPage.module.css'

function LandingPage() {
  return (
    <div className={styles.landingPage}>
      <Sidebar/>
    </div>
  )
}

export default LandingPage