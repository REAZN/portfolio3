import styles from "styles/sections/experiments.module.scss"
import {Button, LinkIcon, Title} from "components";
import config from "config";

export default function Experiments() {
    return (
        <section className={styles.experiments}>
            <div className={styles.blur} style={{bottom: "250px", right: "-300px", backgroundColor: "rgba(203, 77, 153, 0.2)"}}/>
            <div className={styles.blur} style={{top: "-100px", left: "-300px"}}/>
            <div className={styles.experimentContainer}>
                <div className={styles.info}>
                    <Title title={"Experiments."} center={true}/>
                    <p>A collection fo experiments and open source projects I created.</p>
                    <Button href={`https://codepen.com/${config.social.codepen}`}>
                        View Collection
                        <LinkIcon fill={"white"}/>
                    </Button>
                </div>

                <ul className={styles.cards}>
                    {config.experiments.map((experiment, index) => (
                        <li key={experiment.title} className={styles.card} >
                            <a href={experiment.url} target="_blank" rel="noreferrer">
                                <div className={styles.image}>
                                    <img src={`/images/codepen/${experiment.image}`} alt={experiment.title}/>
                                </div>
                                <div className={styles.text}>
                                    <span className={styles.number}>
                                        experiment 0{(index + 1)}
                                    </span>
                                    <span className={styles.title}>{experiment.title}</span>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>

    )
}
