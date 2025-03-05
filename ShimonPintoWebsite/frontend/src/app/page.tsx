import Sidebar from "../components/Sidebar/Sidebar";
import styles from "../components/LandingPage/LandingPage.module.css";

export default function LandingPage() {
  return (
    <div className={styles.landingPage}>
      <Sidebar />
    </div>
  );
}
