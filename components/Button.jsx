import styles from "styles/components/button.module.scss";

export default function Button({children = "button", href = "/"}) {
    return (
        <a className={styles.button} href={href} target="_blank" rel="noreferrer">{children}</a>
    )
}
