import React from "react";
import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";
import {About} from "components";
import Head from 'next/head'
import { motion, AnimatePresence } from "framer-motion";

export default function Index() {

    const pages = ["Home", "About", "Projects", "Experiments"];

    return (
        <div className="App">
            <ReactFullpage
                navigation
                credits={{enabled: false}}
                // slideNavigation={true}
                sectionsColor={["#282c34", "#ff5f45", "#0798ec"]}
                anchors={pages}
                navigationTooltips={pages}

                render={comp =>
                    console.log("render prop change") || (
                        <ReactFullpage.Wrapper>
                            <div className="section">
                                <About/>
                            </div>
                            <div className="section">
                                <div className="slide">
                                    <h3>Slide 2.1</h3>
                                </div>
                                <div className="slide">
                                    <h3>Slide 2.2</h3>
                                </div>
                                <div className="slide">
                                    <h3>Slide 2.3</h3>
                                </div>
                            </div>
                            <div className="section">
                                <h3>Section 3</h3>
                                {/*<button onClick={() => fullpageApi.moveTo(1, 0)}>*/}
                                {/*    Move top*/}
                                {/*</button>*/}
                            </div>
                        </ReactFullpage.Wrapper>
                    )
                }
            />
        </div>
    );
};
