import React from 'react'
import './intro.css'
import GitHub from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import Boy from '../../img/boy.png'
import ThumbUp from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import Glass from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { themeContext } from '../../Context'
import { useContext } from 'react'

const Intro = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
    return (
        <div className='intro'>
            <div className="i-left">
                <div className="i-name">
                    <span style={{ color: darkMode ? 'white' : '' }}>Hello, I Am</span>
                    <span>Joni</span>
                    <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia voluptatum veniam natus sed dolore eveniet, eaque maiores ipsam quam ab illo beatae eum magnam sequi minima ipsum? Quasi, placeat optio.</span>
                </div>
                <button className="button i-button">Hire Me</button>
                <div className="i-icons">
                    <img src={GitHub} alt="" />
                    <img src={LinkedIn} alt="" />
                    <img src={Instagram} alt="" />
                </div>
            </div>

            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={Boy} alt="" />
                <img src={Glass} alt='' />
                <div style={{ top: '-4%', left: '68%' }}>
                    <FloatingDiv image={Crown} txt1='Web' txt2='Developer' />
                </div>
                <div style={{ top: '18rem', left: '0rem' }}>
                    <FloatingDiv image={ThumbUp} txt1='Best Design' txt2='Award' />
                </div>

                {/* Blure Divs */}
                <div className="blur" style={{ background: "rgb(238 210 255)" }}>

                </div>
                <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
                <div
                    className="blur"
                    style={{
                        background: "#C1F5FF",
                        top: "17rem",
                        width: "21rem",
                        height: "11rem",
                        left: "-9rem",
                    }}
                ></div>

            </div>
        </div>
    )
}

export default Intro