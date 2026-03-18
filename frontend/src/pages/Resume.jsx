import { FaDownload } from 'react-icons/fa';
import './Resume.css';

const Resume = () => {
    return (
        <div className="resume-page">
            <div className="resume-header">
                <h1 className="section-title">My <span>Resume</span></h1>
                <p className="resume-subtitle">View my qualifications and professional experience.</p>
                <a href="/Jilu%20P%20Jose%20CV.pdf" download="Jilu_P_Jose_CV.pdf" className="btn btn-primary download-btn">
                    <FaDownload /> Download PDF
                </a>
            </div>

            <div className="resume-container glass-panel">
                <p className="resume-instruction">
                    If the PDF does not load below, please use the download button above.
                </p>
                <object 
                    data="/Jilu%20P%20Jose%20CV.pdf" 
                    type="application/pdf" 
                    className="resume-viewer"
                >
                    <p>It appears your browser does not support embedded PDFs. 
                    <a href="/Jilu%20P%20Jose%20CV.pdf" download="Jilu_P_Jose_CV.pdf">Click here to download it.</a></p>
                </object>
            </div>
        </div>
    );
};

export default Resume;
