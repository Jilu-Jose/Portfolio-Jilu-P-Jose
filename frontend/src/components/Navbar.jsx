import { Link } from 'react-router-dom';
import { FiSun, FiMoon } from 'react-icons/fi';
import './Navbar.css';

const Navbar = ({ theme, toggleTheme }) => {
    return (
        <nav className="navbar glass-panel">
            <div className="logo">J.I.L.U</div>
            <div className="nav-links">
                <Link to="/login" className="nav-item">Login</Link>
                <Link to="/" className="nav-item">Home</Link>
                <a href="/#projects" className="nav-item">Projects</a>
                <a href="/#about" className="nav-item">About</a>
                <a href="/#contact" className="nav-item">Contact</a>
                <button id="theme-toggle" onClick={toggleTheme}>
                    {theme === 'dark' ? <FiSun /> : <FiMoon />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
