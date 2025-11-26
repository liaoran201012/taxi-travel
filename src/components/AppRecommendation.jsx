import React from 'react';

export default function AppRecommendation({ countryData }) {
    if (!countryData) return null;

    return (
        <div className="card" style={{ borderTop: '4px solid var(--primary-color)' }}>
            <h2>📱 Recommended Apps</h2>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem', marginTop: '1rem' }}>
                {countryData.apps.map(app => (
                    <span key={app} style={{
                        background: 'var(--primary-color)',
                        color: 'white',
                        padding: '0.5rem 1rem',
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        fontWeight: '500',
                        boxShadow: '0 2px 4px rgba(37, 99, 235, 0.2)'
                    }}>
                        {app}
                    </span>
                ))}
            </div>
            <div style={{ background: '#f1f5f9', padding: '1rem', borderRadius: '8px' }}>
                <p style={{ marginBottom: '0.5rem' }}><strong>💡 Local Insight:</strong></p>
                <p>{countryData.notes}</p>
            </div>
            <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'var(--text-secondary)', textAlign: 'right' }}>
                Local Currency: <strong>{countryData.currency}</strong>
            </p>
        </div>
    );
}
