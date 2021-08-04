import React from 'react';
import { Person, Mail } from "@material-ui/icons";

import "./topbar.scss";

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Bill</a>
                    <div className="itemContainer">
                        <Person className="icon" />
                        <span>+250 785 867 199</span>
                    </div>
                    <div className="itemContainer">
                    <Mail className="icon" />
                        <span>DushimeBillBenon@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger">
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
