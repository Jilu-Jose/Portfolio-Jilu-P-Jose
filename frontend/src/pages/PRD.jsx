import React from 'react';
import './PRD.css';
import { FaFilePdf, FaDownload, FaRegFileAlt, FaHdd, FaCalendarAlt } from 'react-icons/fa';

const PRD = () => {
    const prds = [
        { 
            id: 1, 
            fileName: 'WIKTOR_PRD.pdf',
            mainTitle: 'W.I.K.T.O.R',
            subTitle: 'Wikipedia Info Tracking & Online Retrieval',
            pages: 17, 
            size: '35 kB', 
            date: 'Oct 2025',
            url: '/prds/WIKTOR_PRD.pdf'
        },
        { 
            id: 2, 
            fileName: 'NOVA_PRD.pdf',
            mainTitle: 'N.O.V.A',
            subTitle: 'Satellite Health Monitoring System',
            pages: 21, 
            size: '43 kB', 
            date: 'Sep 2025',
            url: '/prds/NOVA_PRD.pdf'
        },
        { 
            id: 3, 
            fileName: 'SENTRA_PRD.pdf',
            mainTitle: 'S.E.N.T.R.A',
            subTitle: 'Sentiment Tracking & Analytics System',
            pages: 14, 
            size: '52 kB', 
            date: 'Aug 2025',
            url: '/prds/SENTRA_PRD.pdf'
        },
        { 
            id: 4, 
            fileName: 'FALCON_PRD.pdf',
            mainTitle: 'F.A.L.C.O.N',
            subTitle: 'Financial Anomaly & Loss Control Optimization',
            pages: 18, 
            size: '60 kB', 
            date: 'Jul 2025',
            url: '/prds/FALCON_PRD.pdf'
        }
    ];

    return (
        <div className="prd-page">
            <div className="prd-header">
                <h1 className="section-title">Project <span>Requirements</span></h1>
                <p className="prd-subtitle">Manage and access all your official Project Requirement Documents (PRDs).</p>
            </div>

            <div className="prd-container">
                <div className="prd-grid biz-layout">
                    {prds.map((prd) => (
                        <a href={prd.url} download className="biz-card" key={prd.id}>
                            {/* Left Section */}
                            <div className="biz-left">
                                <div className="biz-logo">
                                    <FaFilePdf className="biz-logo-icon" />
                                    <span className="biz-logo-text">PROJECT<br/>DOCUMENT</span>
                                </div>
                            </div>

                            {/* Top Right Ribbon Group */}
                            <div className="biz-top-ribbon-group">
                                <div className="biz-slash-1"></div>
                                <div className="biz-slash-2"></div>
                                <div className="biz-ribbon-main">
                                    <div className="biz-ribbon-text">
                                        <h3>{prd.mainTitle}</h3>
                                        <p>{prd.subTitle}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Right Content Details */}
                            <div className="biz-details">
                                <div className="biz-detail-row">
                                    <div className="biz-detail-icon"><FaRegFileAlt /></div>
                                    <div className="biz-detail-text">
                                        <span>{prd.pages} Pages Document</span>
                                    </div>
                                </div>
                                <div className="biz-detail-row">
                                    <div className="biz-detail-icon"><FaHdd /></div>
                                    <div className="biz-detail-text">
                                        <span>{prd.size} PDF Format</span>
                                    </div>
                                </div>
                                <div className="biz-detail-row">
                                    <div className="biz-detail-icon"><FaCalendarAlt /></div>
                                    <div className="biz-detail-text">
                                        <span>Date: {prd.date}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Shapes */}
                            <div className="biz-bottom-orange"></div>
                            <div className="biz-qr-code">
                                <FaFilePdf style={{ color: '#f38d1d', fontSize: '2rem' }} />
                            </div>

                            <div className="biz-bottom-dark">
                                <div className="biz-download-btn">
                                    <div className="dl-icon"><FaDownload /></div>
                                    DOWNLOAD FILE
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PRD;
