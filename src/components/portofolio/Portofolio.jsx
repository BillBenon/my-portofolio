import { React, useEffect, useState } from 'react';

import PortofolioList from '../portofolioList/PortofolioList';
import {
    featuredPortfolio,
    mobilePortfolio,
    designPortfolio,
    contentPortfolio,
    webPortfolio
} from '../../data';
import "./portofolio.scss";

export default function Portofolio() {
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);

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
    ];

    useEffect(() => {
        switch(selected) {
            case "featured":
                setData(featuredPortfolio);
                break;
            case "web":
                setData(webPortfolio);
                break;
            case "mobile":
                setData(mobilePortfolio);
                break;
            case "design":
                setData(designPortfolio);
                break;
            case "content":
                setData(contentPortfolio);
                break;
            default:
                setData(featuredPortfolio);
        }
    }, [selected])

    return (
        <div className="portofolio" id="portofolio">
            <h1>Portofolio</h1>
            <ul>
                {list.map(item => (
                    <PortofolioList 
                        title={item.title} 
                        active={selected === item.id} 
                        setSelected={setSelected} 
                        id={item.id}
                    />
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
