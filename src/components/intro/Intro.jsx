import React from 'react';

import "./intro.scss";

export default function Intro() {
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
                    <h3>Open Sourcerer<span></span></h3>
                </div>
                <a href="#portofolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>
    )
}
