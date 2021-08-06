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
                    <img src="data:image/jpeg;base64,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" alt="" />
                    <h3>Banking App</h3>
                </div>
            </div>
        </div>
    )
}
