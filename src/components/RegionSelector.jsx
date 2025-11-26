import React from 'react';

export default function RegionSelector({ data, selectedRegion, selectedCountry, onRegionChange, onCountryChange }) {
    const regions = Object.keys(data);
    const countries = selectedRegion ? Object.keys(data[selectedRegion]) : [];

    return (
        <div className="card">
            <h2>📍 Select Destination</h2>
            <div style={{ display: 'grid', gap: '1rem' }}>
                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Region</label>
                    <select value={selectedRegion} onChange={(e) => onRegionChange(e.target.value)}>
                        <option value="">-- Select Region --</option>
                        {regions.map(r => <option key={r} value={r}>{r}</option>)}
                    </select>
                </div>
                {selectedRegion && (
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Country</label>
                        <select value={selectedCountry} onChange={(e) => onCountryChange(e.target.value)}>
                            <option value="">-- Select Country --</option>
                            {countries.map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                    </div>
                )}
            </div>
        </div>
    );
}
