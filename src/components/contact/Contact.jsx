import React from 'react';

import "./contact.scss";

export default function Contact() {
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt="" />
            </div>
            <div className="right">
                <h2>Contact Us</h2>
                <form>
                    <input type="text" placeholder="Input Email" />
                    <textarea placeholder="Leave a message"></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}