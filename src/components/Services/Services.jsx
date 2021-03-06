import React from "react";
import './Services.css';
import Heart from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from "../Card/Card";
import Resume from './resume.pdf';
import { themeContext } from '../../Context'
import { useContext } from 'react'
import { motion } from 'framer-motion'

const Services = () => {
    const transition = { duration: 1, type: 'spring' }
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
    return (
        <div className="services" id='Services'>

            {/* left side */}
            <div className="awesome">
                <span>My Awesome</span>
                <span style={{ color: darkMode ? 'white' : '' }}>services</span>
                <spane>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <br />
                    ispum is simpley dummy text of the printing and typesetting industry.
                </spane>
                <a href={Resume} download>
                    <button className="button s-button">Download CV</button>
                </a>
                <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
            </div>
            {/* right side */}
            <div className="cards">
                {/* first card */}
                <motion.div
                    whileInView={{ left: '14rem' }}
                    initial={{ left: '25rem' }}
                    transition={transition}
                    style={{ left: '14rem' }}>
                    <Card
                        emoji={Heart}
                        heading={'Design'}
                        detail={"Figma, Sketch, Photoshop, Adobe, Adobe xd"}
                    />
                </motion.div>
                {/* second card */}
                <motion.div
                    whileInView={{ left: '-4rem' }}
                    initial={{ left: '10rem' }}
                    transition={transition}
                    style={{ top: "12rem", left: '-4rem' }}>
                    <Card
                        emoji={Glasses}
                        heading={'Developer'}
                        detail={"Html, Css, JavaScript, React, Nodejs, Express"}
                    />
                </motion.div>
                {/* 3rd */}
                <motion.div
                    whileInView={{ left: '12rem' }}
                    initial={{ left: '25rem' }}
                    transition={transition}
                    style={{ top: "19rem", left: '12rem' }}>
                    <Card
                        emoji={Humble}
                        heading={"UI/UX"}
                        detail={
                            "Lorem ispum dummy text are usually use in section where we need some random text"
                        }
                        color="rgba(252, 166, 31, 0.45)"
                    />
                </motion.div>
                <div
                    className="blur s-blur2"
                    style={{ background: "var(--purple)" }}
                ></div>
            </div>
        </div >
    )
}

export default Services;