import React, { useEffect, useRef, useState } from "react";
import logo from '../assets/logo.svg';
import {FaBars, FaTwitter} from 'react-icons/fa';
import { links} from "../data";
import { social } from "../SocialLinks";
import Links from "./Links";
import Social from "./Social";


const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [data, setData] = useState(links);
    const [details, setDetails] = useState(social);
    const linksRefContainer = useRef(null);
    const linksRef = useRef(null);

    useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect().height

        if(toggle){
            linksRefContainer.current.style.height = `${linksHeight}px`
        }

        else{
            linksRefContainer.current.style.height = '0px';
        }
    },[toggle])

    const toggleButtonHandler = () => {
        {toggle ? (
            setToggle(false)
        ): (
            setToggle(true)
        )}
    };
        
    return(
        <nav>
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} alt="logo"/>
                    <button className="nav-toggle" onClick={toggleButtonHandler}>
                        <FaBars />
                    </button>
                </div>
                
                    <div className= 'links-container show-container' ref={linksRefContainer}>
                    <ul className="links" ref={linksRef}>
                        {data.map((link) => {
                            return(
                                <Links key={link.id} url={link.url} text={link.text} />
                            )
                        })}
                    </ul>
                </div>
                
                <ul className="social-icons">
                    {details.map((detail) => {
                        return(
                            <Social key={detail.id} url={detail.url} icon={detail.icon}/>
                        )
                    })}
                </ul>

            </div>
        </nav>
    );

}

    

export default Navbar;