import { useState, useEffect } from 'react';
import { FaBrain, FaChartLine, FaRobot, FaCogs, FaProjectDiagram, FaCode } from 'react-icons/fa';
import './JobRoles.css';

const rolesData = [
    { title: 'Data Scientist', icon: <FaBrain />, color: '#3399ff', desc: 'Analyzing complex data and building predictive models.' },
    { title: 'Data Analyst', icon: <FaChartLine />, color: '#00cc66', desc: 'Interpreting data to help businesses make informed decisions.' },
    { title: 'ML Engineer', icon: <FaRobot />, color: '#9933ff', desc: 'Designing and deploying scalable machine learning algorithms.' },
    { title: 'MLOps Engineer', icon: <FaCogs />, color: '#ff3333', desc: 'Streamlining deployment and operations of ML models.' },
    { title: 'RPA Developer', icon: <FaProjectDiagram />, color: '#ff9900', desc: 'Automating business processes using software robots.' },
    { title: 'MERN Developer', icon: <FaCode />, color: '#00cccc', desc: 'Building full-stack web applications using robust modern tech.' }
];

const JobRoles = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (isHovered) return;
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % rolesData.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [isHovered]);

    const getCardStyle = (index) => {
        const total = rolesData.length;
        let diff = index - activeIndex;
        if (diff < -Math.floor(total / 2)) diff += total;
        if (diff > Math.floor(total / 2)) diff -= total;

        const isFront = diff === 0;
        
        // Convert to radians to calculate position on a circle
        const angle = diff * (360 / total) * (Math.PI / 180);
        
        // Define ellipse radius based on screen size (handled partially here, mostly fixed for simplicity)
        const radiusX = window.innerWidth < 768 ? 150 : 320; 
        const radiusZ = window.innerWidth < 768 ? 100 : 200;
        
        const x = Math.sin(angle) * radiusX;
        const z = Math.cos(angle) * radiusZ;
        
        const scale = isFront ? 1.15 : Math.max(0.65, 1 - Math.abs(diff) * 0.15);
        const opacity = isFront ? 1 : Math.max(0.3, 1 - Math.abs(diff) * 0.25);
        const zIndex = isFront ? 10 : 5 - Math.abs(diff);

        return {
            transform: `translate3d(${x}px, 0, ${z - radiusZ}px) scale(${scale})`,
            opacity,
            zIndex,
            '--role-color': rolesData[index].color
        };
    };

    return (
        <section id="roles" className="roles-section">
            <h2 className="section-title">Eligible Job <span>Roles</span></h2>
            <div 
                className="carousel-scene" 
                onMouseEnter={() => setIsHovered(true)} 
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="carousel-container">
                    {rolesData.map((role, index) => {
                        const style = getCardStyle(index);
                        const isFront = index === activeIndex;
                        return (
                            <div 
                                className={`role-card glass-panel interactive ${isFront ? 'active' : ''}`} 
                                key={index} 
                                style={style} 
                                onClick={() => setActiveIndex(index)}
                            >
                                <div className="role-icon">
                                    {role.icon}
                                </div>
                                <h3>{role.title}</h3>
                                <p className="role-desc">{role.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
            
            <div className="carousel-nav">
                {rolesData.map((_, idx) => (
                    <button 
                        key={idx} 
                        className={`nav-dot ${idx === activeIndex ? 'active' : ''}`}
                        onClick={() => setActiveIndex(idx)}
                        aria-label={`Go to role ${idx + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default JobRoles;
