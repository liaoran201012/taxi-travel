import React, { useState } from 'react';
import Header from './components/Header';
import RegionSelector from './components/RegionSelector';
import AppRecommendation from './components/AppRecommendation';
import FareEstimator from './components/FareEstimator';
import SafetyTips from './components/SafetyTips';
import { taxiApps } from './data/taxiApps';

function App() {
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');

  const handleRegionChange = (region) => {
    setSelectedRegion(region);
    setSelectedCountry(''); // Reset country when region changes
  };

  const currentCountryData = selectedRegion && selectedCountry
    ? taxiApps[selectedRegion][selectedCountry]
    : null;

  return (
    <>
      <Header />
      <main className="container">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <RegionSelector
            data={taxiApps}
            selectedRegion={selectedRegion}
            selectedCountry={selectedCountry}
            onRegionChange={handleRegionChange}
            onCountryChange={setSelectedCountry}
          />

          {currentCountryData ? (
            <>
              <AppRecommendation countryData={currentCountryData} />
              <FareEstimator currency={currentCountryData.currency} />
            </>
          ) : (
            <div className="card" style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-secondary)' }}>
              <p>👈 Select a region and country to see recommendations.</p>
            </div>
          )}
        </div>

        <div>
          <SafetyTips />
          <div className="card" style={{ marginTop: '1.5rem', background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)', color: 'white' }}>
            <h3>🚀 About this Tool</h3>
            <p style={{ fontSize: '0.9rem', opacity: 0.8, marginTop: '0.5rem' }}>
              This is an open-source tool to help travelers navigate local transport options.
              Data is community-sourced and may change.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
