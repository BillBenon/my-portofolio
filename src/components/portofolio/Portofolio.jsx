import React from 'react';

import PortofolioList from '../portofolioList/PortofolioList';
import "./portofolio.scss";

export default function Portofolio() {

    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "web",
            title: "Web App",
        },
        {
            id: "mobile",
            title: "Mobile App",
        },
        {
            id: "design",
            title: "Design",
        },
        {
            id: "content",
            title: "Content",
        },
    ]
    return (
        <div className="portofolio" id="portofolio">
            <h1>Portofolio</h1>
            <ul>
                {list.map(item => (
                    <PortofolioList title={item.title}/>
                ))}
            </ul>
            <div className="container">
                <div className="item">
                    <img src="https://mk0appinventiv4394ey.kinstacdn.com/wp-content/uploads/sites/1/2021/01/banking-app-development-cost.png" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://mk0appinventiv4394ey.kinstacdn.com/wp-content/uploads/sites/1/2021/01/banking-app-development-cost.png" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://mk0appinventiv4394ey.kinstacdn.com/wp-content/uploads/sites/1/2021/01/banking-app-development-cost.png" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://mk0appinventiv4394ey.kinstacdn.com/wp-content/uploads/sites/1/2021/01/banking-app-development-cost.png" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://mk0appinventiv4394ey.kinstacdn.com/wp-content/uploads/sites/1/2021/01/banking-app-development-cost.png" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://mk0appinventiv4394ey.kinstacdn.com/wp-content/uploads/sites/1/2021/01/banking-app-development-cost.png" alt="" />
                    <h3>Banking App</h3>
                </div>
            </div>
        </div>
    )
}
