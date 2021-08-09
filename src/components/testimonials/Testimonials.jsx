import React from 'react';

import "./testimonials.scss";

export default function Testimonials() {
    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                <div className="card">
                    <div className="top">
                        <img src="assets/right-arrow.png" className="left" alt="" />
                        <img 
                            className="user" 
                            src="https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                            alt="" 
                        />
                        <img className="right" src="assets/youtube.png" alt="" />
                    </div>
                    <div className="center">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Doloribus iure quae ullam veritatis repellat dolores, nobis labore.
                    </div>
                    <div className="bottom">
                        <h3>Stanley</h3>
                        <h4>Instructor at RCA</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
