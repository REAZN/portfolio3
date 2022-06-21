import styles from "styles/components/title.module.scss";


export default function Title({title = "Title", center = false}) {
    return (
        <div className={styles.title}>
            <h1>{title}</h1>
            <div className={styles.line} style={center ? {margin: "auto"} : {}}/>
        </div>
    )
}
