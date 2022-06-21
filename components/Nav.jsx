import styles from "styles/components/nav.module.scss";
import {useLocation} from "react-router-dom";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Link from "next/link";


export default function Nav({pages}) {
    const router = useRouter()
    let [path, setPath] = useState(router.asPath.replace("/#", ""));

    console.log(path)

    return (
      <header className={styles.navContainer}>
          <nav className={styles.nav}>
              <ul className={styles.navLinks} id={"menu"}>
                  {pages.map((link, index) => (
                      <li key={link} className={`${styles.link} ${path === link ? styles.active : ""}`}>
                          <a href={`#${link}`}>{link}</a>
                      </li>
                  ))}
              </ul>
          </nav>
      </header>
    );
}
