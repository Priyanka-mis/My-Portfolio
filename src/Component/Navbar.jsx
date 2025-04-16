
import React, { useState } from 'react';
import './Navbar.css';
import { FiMenu, FiX } from 'react-icons/fi';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle menu visibility
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header>
            {/* Logo */}
            <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="https://freepngimg.com/save/72411-product-priyanka-brand-chopra-design-logo-font/1920x1200" alt="Logo" />
            </a>

            {/* Toggle Button (Visible in mobile view) */}
            <button className="toggle-btn" onClick={toggleMenu}>
                {isOpen ? <FiX /> : <FiMenu />}
            </button>

            {/* Navigation Menu */}
            <nav className={`nav-menu ${isOpen ? "open" : ""}`}>
                <a href="#home" onClick={toggleMenu}>Home</a>
                <a href="#about" onClick={toggleMenu}>About</a>
                <a href="#projects" onClick={toggleMenu}>Projects</a>
                <a href="#skills" onClick={toggleMenu}>Skills</a>
                <a href="#education" onClick={toggleMenu}>Education</a>
                <a href="#contact" onClick={toggleMenu}>Contact</a>
            </nav>
        </header>
    );
}

export default Navbar;
