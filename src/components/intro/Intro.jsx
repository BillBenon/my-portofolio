import { React, useEffect, useRef } from 'react';

import { init } from 'ityped';

import "./intro.scss";

export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Developer", "full stack", "Content Creator"],
        })
    }, []);
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/man.png" alt="Bill" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1>Dushime Bill Benon</h1>
                    <h3>Open Sourcerer <span ref={textRef}></span></h3>
                </div>
                <a href="#portofolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>
    )
}
