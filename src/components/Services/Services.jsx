import React from "react";
import './Services.css';
import Heart from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humbel from '../../img/humble.png';


const Services = () => {
    return (
        <div className="services">

            {/* left side */}
            <div className="awesome">
                <span>My Awesome</span>
                <span>services</span>
                <spane>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <br />
                    ispum is simpley dummy text of the printing and typesetting industry.
                </spane>
                <button className="button s-button">Download CV</button>
                <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
            </div>
            {/* right side */}
            <div className="cards">
                I am the Right side
            </div>
        </div>
    )
}

export default Services;