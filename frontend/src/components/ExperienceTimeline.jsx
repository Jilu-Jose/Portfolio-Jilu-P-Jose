import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import './ExperienceTimeline.css';

const timelineData = [
    {
        title: 'AI Lead',
        organization: 'Tezzera',
        date: '2023 - Present',
        icon: <FaBriefcase />,
        description: 'Leading AI initiatives, building predictive models, and scaling data infrastructure for enterprise solutions.'
    },
    {
        title: 'Data Scientist',
        organization: 'Tezzera',
        date: '2022 - 2023',
        icon: <FaBriefcase />,
        description: 'Developed and deployed machine learning pipelines, performed advanced statistical analysis, and created actionable insights.'
    },
    {
        title: 'BTech Computer Science (Data Science)',
        organization: 'Lovely Professional University',
        date: '2020 - 2024',
        icon: <FaGraduationCap />,
        description: 'Major in Data Science & Machine Learning. Graduated with honors, focusing on deep learning and distributed systems.'
    }
];

const ExperienceTimeline = () => {
    return (
        <section id="experience" className="timeline-section">
            <h2 className="section-title">Experience & <span>Education</span></h2>
            <div className="timeline-container">
                <div className="timeline-line"></div>
                {timelineData.map((item, index) => (
                    <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
                        <div className="timeline-dot">{item.icon}</div>
                        <div className="timeline-content glass-panel">
                            <span className="timeline-date">{item.date}</span>
                            <h3>{item.title}</h3>
                            <h4>{item.organization}</h4>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ExperienceTimeline;
