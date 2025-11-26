import React from 'react';

export default function SafetyTips() {
    return (
        <div className="card" style={{ borderLeft: '4px solid var(--accent-color)' }}>
            <h3 style={{ color: 'var(--accent-color)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>⚠️</span> Traveler Safety Tips
            </h3>
            <ul style={{ paddingLeft: '1.2rem', display: 'grid', gap: '0.8rem', marginTop: '1rem' }}>
                <li><strong>Share your ride:</strong> Always use the "Share Status" feature in the app to let friends know your location.</li>
                <li><strong>Check the plate:</strong> Verify the license plate and driver's photo match the app before getting in.</li>
                <li><strong>Follow the map:</strong> Keep your own maps app open to ensure the driver is taking a logical route.</li>
                <li><strong>Avoid street hails:</strong> In many countries, app-based rides are safer and have fixed pricing compared to street taxis.</li>
            </ul>
        </div>
    );
}
