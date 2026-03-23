import { useEffect, useRef, useState } from 'react';
import './Education.css';

const educationData = [
    {
        institution: 'Lovely Professional University Punjab',
        degree: 'BTech in Computer Science and Engineering',
        detail: 'CGPA: 8.1',
        period: "Aug '23 – Present",
        location: 'Jalandhar, Punjab',
        position: 'top',
    },
    {
        institution: 'Kendriya Vidyalaya Dimapur',
        degree: '12th Science (CBSE)',
        detail: '76%',
        period: "Apr '21 – Apr '22",
        location: 'Dimapur, Nagaland',
        position: 'bottom',
    },
    {
        institution: 'Kendriya Vidyalaya 3BRD Air Force Station Chandigarh',
        degree: '10th (CBSE)',
        detail: '75%',
        period: "Apr '19 – Apr '20",
        location: 'Chandigarh, Punjab',
        position: 'top',
    },
];

const Education = () => {
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
            { threshold: 0.2 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="education-section" id="education" ref={sectionRef}>
            <h2 className="section-title">Edu<span>cation</span></h2>

            <div className={`edu-timeline-wrap ${visible ? 'edu-animate' : ''}`}>

                {/* ── ROW 1: top cards ── */}
                <div className="edu-row-top">
                    {educationData.map((item, i) => (
                        <div className="edu-col" key={i} style={{ '--delay': `${i * 0.22}s` }}>
                            {item.position === 'top' ? (
                                <div className="edu-card edu-card--top">
                                    <div className="edu-card-accent" />
                                    <div className="edu-card-body">
                                        <p className="edu-period">{item.period}</p>
                                        <h3 className="edu-institution">{item.institution}</h3>
                                        <p className="edu-degree">{item.degree}<span className="edu-detail"> — {item.detail}</span></p>
                                        <p className="edu-location">{item.location}</p>
                                    </div>
                                </div>
                            ) : <div className="edu-spacer" />}
                        </div>
                    ))}
                </div>

                {/* ── ROW 2: spine + stems + dots ── */}
                <div className="edu-row-spine">
                    {/* The horizontal line */}
                    <div className="edu-h-line">
                        <div className="edu-h-line-fill" />
                    </div>

                    {educationData.map((item, i) => (
                        <div className="edu-col edu-col-spine" key={i} style={{ '--delay': `${i * 0.22}s` }}>
                            {item.position === 'top' ? (
                                <>
                                    <div className="edu-stem edu-stem--top" />
                                    <div className="edu-dot" />
                                    <div className="edu-stem edu-stem--bottom edu-stem--ghost" />
                                </>
                            ) : (
                                <>
                                    <div className="edu-stem edu-stem--top edu-stem--ghost" />
                                    <div className="edu-dot" />
                                    <div className="edu-stem edu-stem--bottom" />
                                </>
                            )}
                        </div>
                    ))}
                </div>

                {/* ── ROW 3: bottom cards ── */}
                <div className="edu-row-bottom">
                    {educationData.map((item, i) => (
                        <div className="edu-col" key={i} style={{ '--delay': `${i * 0.22}s` }}>
                            {item.position === 'bottom' ? (
                                <div className="edu-card edu-card--bottom">
                                    <div className="edu-card-accent" />
                                    <div className="edu-card-body">
                                        <p className="edu-period">{item.period}</p>
                                        <h3 className="edu-institution">{item.institution}</h3>
                                        <p className="edu-degree">{item.degree}<span className="edu-detail"> — {item.detail}</span></p>
                                        <p className="edu-location">{item.location}</p>
                                    </div>
                                </div>
                            ) : <div className="edu-spacer" />}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Education;
