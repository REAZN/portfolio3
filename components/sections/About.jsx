import styles from "styles/sections/About.module.scss";
// import { motion, AnimatePresence } from "framer-motion";
import { Title, Button, Sphere, GitHub, Twitter, LinkedIn, CodePen, LinkIcon, Signature } from "components";
import config from "config";

export default function About() {
    return (
        <section className={styles.about}>
            <div className={styles.background}>
                <Signature/>
            </div>
            <div className={styles.aboutContainer}>
                <div className={styles.content}>
                    <div className={styles.info}>
                        <Title title={"About."}/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A expedita quia quibusdam saepe suscipit! Accusantium amet aperiam, asperiores, dolorum facilis iure officia quis repellat sequi sit tempora unde. Et, voluptates.</p>
                        <ul className={styles.social}>
                            <li><a href={`https://github.com/${config.social.github}`} target="_blank" rel="noreferrer"><GitHub fill="var(--text)"/></a></li>
                            <li><a href={`https://codepen.io/${config.social.codepen}`} target="_blank" rel="noreferrer"><CodePen fill="var(--text)"/></a></li>
                            <li><a href={`https://linkedin.com/in/${config.social.linkedin}`} target="_blank" rel="noreferrer"><LinkedIn fill="var(--text)"/></a></li>
                            <li><a href={`https://twitter.com/${config.social.twitter}`} target="_blank" rel="noreferrer"><Twitter fill="var(--text)"/></a></li>
                        </ul>
                        <Button href={"/cv"}>
                            Curriculum Vitae
                            <LinkIcon fill={"white"}/>
                        </Button>
                    </div>
                    <div className={styles.sphere}>
                        <Sphere style={{ width: "100%", height: "100%" }}/>
                    </div>
                </div>
            </div>
        </section>
    );
}
