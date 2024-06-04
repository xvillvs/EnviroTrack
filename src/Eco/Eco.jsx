import React, { useState } from 'react';
import './Eco.css';

const sites = [
  { name: 'San Juan Batangas', region: 'Batangas', imageUrl: 'SanJuan.jpg' },
  { name: 'Masasa Beach', region: 'Batangas', imageUrl: 'Masasa.png' },
  { name: 'Calatagan Batangas', region: 'Batangas', imageUrl: 'Calatagan.png' },
];

function App() {
  const [selectedRegion, setSelectedRegion] = useState('Batangas');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSites = sites.filter(site => {
    return (selectedRegion === 'Batangas' || site.region === selectedRegion) &&
           site.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="App">
      <h1>Enviro</h1>
      <div className="filters">
        <select onChange={(e) => setSelectedRegion(e.target.value)}>
          <option value="Batangas">Batangas Province</option>
        </select>
        <input 
          type="text" 
          placeholder="Search" 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
      </div>
      <div className="sites">
        {filteredSites.map((site, index) => (
          <div className="site" key={index}>
            <img src={site.imageUrl} alt={site.name} />
            <a href="/ecofee">{site.name}</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
