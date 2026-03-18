import './Background.css';

const Background = () => {
    return (
        <div className="portfolio-bg">
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
