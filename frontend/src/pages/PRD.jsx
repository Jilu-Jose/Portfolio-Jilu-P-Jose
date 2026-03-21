import { useState } from 'react';
import './PRD.css';
import { FaCloudUploadAlt, FaFilePdf, FaDownload } from 'react-icons/fa';

const PRD = () => {
    // Dummy state for uploaded PRDs
    const [prds, setPrds] = useState([
        { id: 1, title: 'NOVA Project Requirements', date: 'Oct 12, 2025', size: '2.4 MB' },
        { id: 2, title: 'S.E.N.T.R.A Architecture Review', date: 'Sep 05, 2025', size: '3.1 MB' },
        { id: 3, title: 'F.A.L.C.O.N Initial Draft', date: 'Aug 22, 2025', size: '1.8 MB' }
    ]);

    const handleUpload = (e) => {
        e.preventDefault();
        // Just mock upload logic for the UI demonstration
        const newFile = {
            id: prds.length + 1,
            title: 'New Uploaded Document.pdf',
            date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
            size: '1.5 MB'
        };
        setPrds([newFile, ...prds]);
    };

    return (
        <div className="prd-page">
            <div className="prd-header">
                <h1 className="section-title">Project <span>Requirements</span></h1>
                <p className="prd-subtitle">Manage and access all your official Project Requirement Documents (PRDs).</p>
            </div>

            <div className="prd-container">
                {/* Upload Section */}
                <div className="upload-section glass-panel">
                    <div className="upload-content">
                        <FaCloudUploadAlt className="upload-icon" />
                        <h3>Upload New PRD</h3>
                        <p>Drag & drop your PDF file here, or click to browse</p>
                        <button className="btn primary-btn upload-btn" onClick={handleUpload}>
                            Select File
                        </button>
                    </div>
                </div>

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
                                <button className="btn secondary-btn download-btn">
                                    <FaDownload /> Download
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PRD;
