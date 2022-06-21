import React from "react";
import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";
import {Nav, About, Projects} from "components";
import Head from 'next/head'
import { motion, AnimatePresence } from "framer-motion";

import config from "config";

export default function Index() {

    const pages = ["Home", "About", "Projects", "Experiments"];

    return (
        <div className="App">
            <Nav pages={pages}/>
            <ReactFullpage
                navigation
                credits={{enabled: false}}
                // slideNavigation={true}
                // sectionsColor={["#282c34", "#ff5f45", "#0798ec"]}
                anchors={pages}
                licenceKey={"gplv3-license"}

                render={comp =>
                    console.log("render prop change") || (
                        <ReactFullpage.Wrapper>
                            <div className="section">
                                Home
                            </div>
                            <div className="section">
                                <About/>
                            </div>
                            <div className="section">
                                {config.projects.map((project, index) => (
                                    <div className="slide" key={project.title}>
                                        <Projects
                                            index={index}
                                            title={project.title}
                                            description={project.description}
                                            technologies={project.technologies}
                                            image={project.image}
                                            demo={project.demo}
                                            github={project.github}
                                            background={project.color}
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="section">
                                <h3>Experiments</h3>
                            </div>
                        </ReactFullpage.Wrapper>
                    )
                }
            />
        </div>
    );
};
