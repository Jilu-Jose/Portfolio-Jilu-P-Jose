import { useState } from 'react';
import './PRD.css';
import { FaFilePdf, FaDownload } from 'react-icons/fa';

const PRD = () => {
    // State for PRDs - To add real documents, put the PDF files in the frontend/public/prds folder
    // and update the 'url' property below to point to the file (e.g., '/prds/nova_prd.pdf')
    const [prds, setPrds] = useState([
        { id: 1, title: 'NOVA Project Requirements', date: 'Oct 12, 2025', size: '2.4 MB', url: '/prds/nova_prd.pdf' },
        { id: 2, title: 'S.E.N.T.R.A Architecture Review', date: 'Sep 05, 2025', size: '3.1 MB', url: '/prds/sentra_prd.pdf' },
        { id: 3, title: 'F.A.L.C.O.N Initial Draft', date: 'Aug 22, 2025', size: '1.8 MB', url: '/prds/falcon_prd.pdf' }
    ]);

    return (
        <div className="prd-page">
            <div className="prd-header">
                <h1 className="section-title">Project <span>Requirements</span></h1>
                <p className="prd-subtitle">Manage and access all your official Project Requirement Documents (PRDs).</p>
            </div>

            <div className="prd-container">
                {/* PRD Grid */}
                <div className="prd-grid">
                    {prds.map((prd) => (
                        <div className="prd-card glass-panel" key={prd.id}>
                            <div className="prd-card-header">
                                <FaFilePdf className="pdf-icon" />
                                <div className="prd-info">
                                    <h4>{prd.title}</h4>
                                    <span className="prd-meta">{prd.date} • {prd.size}</span>
                                </div>
                            </div>
                            <div className="prd-card-footer">
                                <a href={prd.url} download className="btn secondary-btn download-btn" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                                    <FaDownload /> Download
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PRD;
