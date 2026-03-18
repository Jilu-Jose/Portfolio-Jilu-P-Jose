import { useEffect, useState } from 'react';
import './Background.css';

const Background = () => {
    const [cursorPos, setCursorPos] = useState({ x: -200, y: -200 });

    useEffect(() => {
        let animationFrameId;
        const handleMouseMove = (e) => {
            animationFrameId = requestAnimationFrame(() => {
                setCursorPos({ x: e.clientX, y: e.clientY });
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="portfolio-bg">
            <div className="cursor-glow" style={{ left: cursorPos.x, top: cursorPos.y }}></div>
            <div className="bg-ambient-light light-red"></div>
            <div className="bg-ambient-light dark-red"></div>
            <div className="bg-ambient-light deep-grey"></div>
            
            <div className="bg-grid-tech"></div>
            
            <div className="bg-particles">
                <div className="particle pr-1"></div>
                <div className="particle pr-2"></div>
                <div className="particle pr-3"></div>
                <div className="particle pr-4"></div>
                <div className="particle pr-5"></div>
            </div>
        </div>
    );
};

export default Background;
