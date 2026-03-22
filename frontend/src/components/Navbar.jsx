import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';

const Navbar = ({ theme, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="navbar glass-panel">
            <div className="logo">J.I.L.U</div>
            
            <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
                {isOpen ? <FiX /> : <FiMenu />}
            </button>

            <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                <Link to="/" className="nav-item" onClick={() => setIsOpen(false)}>Home</Link>
                <Link to="/resume" className="nav-item" onClick={() => setIsOpen(false)}>Resume</Link>
                <Link to="/prd" className="nav-item" onClick={() => setIsOpen(false)}>PRDs</Link>
                <a href="/#projects" className="nav-item" onClick={() => setIsOpen(false)}>Projects</a>
                <a href="/#about" className="nav-item" onClick={() => setIsOpen(false)}>About</a>
                <a href="/#contact" className="nav-item" onClick={() => setIsOpen(false)}>Contact</a>
                <button id="theme-toggle" onClick={() => { toggleTheme(); setIsOpen(false); }}>
                    {theme === 'dark' ? <FiSun /> : <FiMoon />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
