import React from 'react';

import "./works.scss";

export default function Works() {
    return (
        <div className="works" id="works">
            <div className="slider">
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src="assets/mobile.png" alt="" />
                                </div>
                                <h2>Title</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Fugiat accusamus voluptas id voluptatibus perferendis.
                                </p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190626123927/untitlsssssed.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
