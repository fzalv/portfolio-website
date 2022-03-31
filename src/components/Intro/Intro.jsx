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

const Intro = () => {
    return (
        <div className='intro'>
            <div className="i-left">
                <div className="i-name">
                    <span>Hello, I Am</span>
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
            </div>
        </div>
    )
}

export default Intro