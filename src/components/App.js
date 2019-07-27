import React, { useState, useEffect } from 'react';
import GemInput from './GemInput';
import GemsContainer from './GemsContainer';

const App = () => {
  const [gems, useGems] = useState([]);
  const [savedGems, useSavedGems] = useState({});
  
  useEffect(() => {
    const oldGems = localStorage.getItem('savedGems');

    if (oldGems) {
      useSavedGems(JSON.parse(oldGems));
    }
  }, []);

  function searchGem(gem) {
    const request = `http://localhost:3000/api/v1/search.json?query=${gem}`;
    const config = {
      mode: 'cors',
    };

    fetch(request, config)
      .then(res => {
        return res.json();
      })
      .then(data => useGems(data));
  }

  function handleSave(gem, saved=false) {
    const { name: gemName} = gem;

    if (saved) delete savedGems[gem.name];
    else savedGems[gemName] = gem;

    localStorage.setItem('savedGems', JSON.stringify(savedGems));
    useSavedGems({...savedGems});
  }

  return (
    <section className="app">
      <GemInput searchGem={searchGem} />
      <GemsContainer gems={gems} handleSave={handleSave} savedGems={savedGems} />
    </section>
  );
}

export default App;