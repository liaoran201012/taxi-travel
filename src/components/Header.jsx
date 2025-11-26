import React from 'react';

export default function Header() {
    return (
        <header style={{ marginBottom: '2rem', textAlign: 'center' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🚕 Global Taxi Guide</h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                Find the best ride-hailing apps and travel safely worldwide
            </p>
        </header>
    );
}
