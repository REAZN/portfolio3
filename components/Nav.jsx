import styles from "styles/components/nav.module.scss";
import { useState, useEffect } from "react";
import {useRouter} from "next/router";

export default function Nav({pages}) {
    const router = useRouter();
    console.log(router.asPath)
    let [path, setPath] = useState(router.asPath.replace("/#", ""));

    useEffect(() => {
        window.addEventListener("hashchange", () => {
            setPath(window.location.hash.replace("#", ""));
        })
    },[]);

    return (
        <header className={styles.navContainer}>
            <nav className={styles.nav}>
                <ul className={styles.navLinks} id={"menu"}>
                    {pages.map(link => (
                        <li key={link} className={`${styles.link} ${path === link ? styles.active : ""}`}>
                            <a href={`#${link}`}>{link}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
