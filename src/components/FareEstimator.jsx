import React, { useState } from 'react';

export default function FareEstimator({ currency }) {
    const [distance, setDistance] = useState('');
    const [estimatedCost, setEstimatedCost] = useState(null);

    const calculateFare = () => {
        if (!distance) return;
        // Mock calculation logic for demonstration
        // In a real app, this would call an API
        const baseFare = 2.0;
        const ratePerKm = 1.5;
        // Random fluctuation to simulate traffic/surge
        const surge = 1 + (Math.random() * 0.2);

        const cost = (baseFare + (parseFloat(distance) * ratePerKm)) * surge;
        setEstimatedCost(cost.toFixed(2));
    };

    return (
        <div className="card">
            <h2>💰 Fare Estimator</h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                Estimate your trip cost based on average local rates.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
                <input
                    type="number"
                    placeholder="Distance (km)"
                    value={distance}
                    onChange={(e) => setDistance(e.target.value)}
                    style={{ marginBottom: 0 }}
                />
                <button onClick={calculateFare} style={{ whiteSpace: 'nowrap' }}>
                    Calculate
                </button>
            </div>

            {estimatedCost && (
                <div style={{
                    marginTop: '1.5rem',
                    textAlign: 'center',
                    padding: '1rem',
                    background: '#ecfdf5',
                    borderRadius: '8px',
                    color: '#065f46'
                }}>
                    <div style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Estimated Fare</div>
                    <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                        ~ {estimatedCost} {currency || 'USD'}
                    </div>
                </div>
            )}
        </div>
    );
}
