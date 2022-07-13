import styles from "styles/sections/Projects.module.scss";
import {Title, Button, LinkIcon} from "components";

export default function Projects({index, title = "Project", description, technologies, image, demo, github, background}) {
    return (
        <section className={styles.projects} style={{backgroundColor: background}}>
            <div className={styles.blur} style={index === 0 ? {bottom: "-100px", right: "-300px"} : {bottom: "-100px", left: "-300px"}}/>
            <div className={styles.blur} style={index === 0 ? {top: "-100px", left: "-150px"} : {top: "-100px", right: "-150px"}}/>
            {/*<div className={styles.blur}/>*/}
            <div className={styles.projectContainer}>
                <Title title={"Projects."}/>
                <div className={styles.project}>
                    <div className={styles.info}>
                        <h2>{title}</h2>
                        <p>{description}</p>
                        <div className={styles.technologies}>
                            {technologies.map((tech) => (
                                <span key={tech}>{tech}</span>
                            ))}
                        </div>
                        <div className={styles.links}>
                            <Button href={demo}>
                                Demo
                                <LinkIcon fill={"white"}/>
                            </Button>
                            <a href={github} className={styles.github}>GitHub</a>
                        </div>
                    </div>
                    <div className={styles.image}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={`/images/projects/${image}`} alt={"Project graphic"}/>
                    </div>
                </div>
            </div>
        </section>
    )
}
