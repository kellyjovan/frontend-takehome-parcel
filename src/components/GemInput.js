import React, { useState } from 'react';

const Input = ({ searchGem }) => {
  const [gemInput, useGemInput] = useState('');
  const [timeout, useTimeout] = useState(null);

  const updateInput = input => useGemInput(input);
  
  function searchGemDebounce(gemInput) {
    clearTimeout(timeout);
    useTimeout(setTimeout(() => {
      if (gemInput) searchGem(gemInput);    
    }, 250));
  }

  return (
    <div className="gem-input-container">
      <input
        className="gem-input"
        type="text"
        value={gemInput}
        onChange={(e) => updateInput(e.target.value)}
        onKeyUp={(e) => searchGemDebounce(gemInput)}
        placeholder="Enter Ruby Gem"
      />
    </div>
  );
}

export default Input;