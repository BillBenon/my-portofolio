import React from 'react';

import "./portofolio.scss";

export default function Portofolio() {
    return (
        <div className="portofolio" id="portofolio">
            <h1>Portofolio</h1>
            <ul>
                <li className="active">Featured</li>
                <li>Web App</li>
                <li>Mobile App</li>
                <li>Desktop App</li>
                <li>Design</li>
            </ul>
            <div className="container">
                <div className="item">
                    <img src="https://th.bing.com/th/id/OIP.C-z28UV0gqt55sAudn4yEAHaEG?pid=ImgDet&rs=1" alt="" />
                    <h3>Banking App</h3>
                </div>
            </div>
        </div>
    )
}
