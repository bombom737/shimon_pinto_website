import Sidebar from "../components/Sidebar/Sidebar";
import LandingPageComponent from "../components/LandingPage/LandingPageComponent";
import "./globals.css";
import styles from "../components/LandingPage/LandingPage.module.css";

export default function LandingPage() {
  return (
    <div className={styles.landingPage}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <LandingPageComponent />
      </div>
    </div>
  );
}
