import React from "react";
import { FaInstagram, FaYoutube, FaBehance, FaLinkedin } from 'react-icons/fa';
import rest from "../assets/rest.png"
export default function HomeHeader(){
    return(
        <div className='header-fake'>
        <div className='header-container'>
                    <img src={rest} alt=""/>
                    <div className='header-title'>
                        <p>Hakkımızda</p>
                        <p>Juri-Yarışma Yazılımı</p>
                        <p>Word Ninja</p>
                        <p>Word Pyramids</p>
                    </div>
                    <div className="social-icons">
                        <FaInstagram className="social-icon" />
                        <FaYoutube className="social-icon" />
                        <FaBehance className="social-icon" />
                        <FaLinkedin className="social-icon" />
                    </div>
                </div>
                </div>
    );               
}