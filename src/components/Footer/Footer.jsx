import React from 'react'
import './Footer.css'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Discord from '@iconscout/react-unicons/icons/uil-discord'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Wave from '../../img/wave.png'

const Footer = () => {
    return (
        <div className='footer'>
            <img src={Wave} alt="" style={{ width: '100%' }} />
            <div className="f-content">
                <span>example@gmail.com</span>
                <div className="f-icons">
                    <Insta color='white' size='3rem' />
                    <Discord color='white' size='3rem' />
                    <Github color='white' size='3rem' />
                </div>
            </div>
        </div>
    )
}

export default Footer