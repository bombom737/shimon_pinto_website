'use client'

import { useState, useEffect } from "react";
import Link from "next/link";
import { SidebarData } from "../SidebarData/SidebarData";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = SidebarData.map((item) => document.getElementById(item.title.toLowerCase()));

      const scrollPosition = window.scrollY + window.innerHeight / 3; 
      for (let section of sections) {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= scrollPosition && rect.bottom >= scrollPosition) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.sidebar}>
      <h1 className={styles.header}>Shimon</h1>
      <ul className={styles.sidebarList}>
        {SidebarData.map((val, key) => (
          <li
            key={key}
            className={`${styles.row} ${
              activeSection === val.title.toLowerCase() ? styles.active : ""
            }`}
          >
            <div className={styles.icon}>{val.icon}</div>
            <Link href={`#${val.title.toLowerCase()}`} className={styles.title}>
              {val.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
