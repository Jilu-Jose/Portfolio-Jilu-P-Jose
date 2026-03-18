import './JobRoles.css';

const rolesData = [
    { title: 'Data Scientist', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=256&auto=format&fit=crop', desc: 'Analyzing complex data and building predictive models.' },
    { title: 'Data Analyst', image: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=256&auto=format&fit=crop', desc: 'Interpreting data to help businesses make informed decisions.' },
    { title: 'ML Engineer', image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=256&auto=format&fit=crop', desc: 'Designing and deploying scalable machine learning algorithms.' },
    { title: 'MLOps Engineer', image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=256&auto=format&fit=crop', desc: 'Streamlining deployment and operations of ML models.' },
    { title: 'RPA Developer', image: 'https://images.unsplash.com/photo-1614850715649-1d0106293bd1?q=80&w=256&auto=format&fit=crop', desc: 'Automating business processes using software robots.' },
    { title: 'MERN Developer', image: 'https://images.unsplash.com/photo-1614849963640-9cc74b2a826f?q=80&w=256&auto=format&fit=crop', desc: 'Building full-stack web applications using robust modern tech.' }
];

const JobRoles = () => {
    return (
        <section id="roles" className="roles-section">
            <h2 className="section-title">Eligible Job <span>Roles</span></h2>
            <div className="roles-grid">
                {rolesData.map((role, index) => (
                    <div className="role-card" key={index}>
                        <div className="role-image-container">
                            <img src={role.image} alt={role.title} className="role-image" />
                        </div>
                        <div className="role-content">
                            <h3>{role.title}</h3>
                            <p className="role-desc">{role.desc}</p>
                        </div>
                        <div className="role-footer">
                            <a href="#learn-more" className="learn-more" onClick={(e) => e.preventDefault()}>
                                Learn more <span className="arrow">&rarr;</span>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default JobRoles;
