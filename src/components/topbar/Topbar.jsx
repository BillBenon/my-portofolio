import React from 'react';
import { Person, Mail } from "@material-ui/icons";

import "./topbar.scss";

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Bill</a>
                </div>
                <div className="right">
                    <div className="itemContainer">
                        <Person />
                        <span>+250 785 867 199</span>
                    </div>
                    <div className="itemContainer">
                        <Mail />
                        <span>DushimeBillBenon@gmail.com</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
