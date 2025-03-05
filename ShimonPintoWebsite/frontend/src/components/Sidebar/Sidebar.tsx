import Link from "next/link";
import { SidebarData } from "../SidebarData/SidebarData";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <h1 className={styles.header}>Shimon</h1>
      <ul className={styles.sidebarList}>
        {SidebarData.map((val, key) => (
          <li key={key} className={styles.row}>
            <div className={styles.icon}>{val.icon}</div>
            <Link href={val.link} className={styles.title}>
              {val.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
