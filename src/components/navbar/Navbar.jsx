import React, { useState } from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';

const Menu = () => (
    <>
        <p> <a href="#home">Home</a> </p>
        <p> <a href="#wgpt3">What is GPT3?</a> </p>
        <p> <a href="#features">Case Studies</a> </p>
        <p> <a href="#possibility">Open AI</a> </p>
        <p> <a href="#blog">Library</a> </p>
    </>
)

// BEM => Block Element Modifier

const Navbar = () => {
    const [toggleMenu, setToggle] = useState(false);

    return (
        <div className="gpt3__navbar">
            <div className="gpt3__navbar-links">
                <div className="gpt3__navbar-links__logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="gpt3__navbar-links__container">
                    <Menu />
                </div>
            </div>
            <div className="gpt3__navbar-sign">
                <p>Sign In</p>
                <button type="button">Sign Up</button>
            </div>
            <div className="gpt3__navbar-menu">
                { toggleMenu 
                    ? <RiCloseLine color="#fff" size={27} onClick={() => {setToggle(false)}   }/>
                    : <RiMenu3Line color="#fff" size={27} onClick={() => {setToggle(true)}   }/>
                } 
                { toggleMenu && (
                    <div className="gpt3__navbar-menu__container scale-up-center ">
                        <div className="gpt3__navbar-menu__container-links">
                            <Menu />
                            <div className="gpt3__navbar-menu__container-links-sign">
                                <p>Sign In</p>
                                <button type="button">Sign Up</button>
                            </div>
                        </div>
                    </div>
                ) }
            </div>
        </div>
    )
}

export default Navbar
