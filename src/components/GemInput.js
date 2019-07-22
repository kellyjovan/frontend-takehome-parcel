import React, { useState } from 'react';

const styles = {
  container: {
    margin: '10px',
    textAlign: 'center',
  },
  input: {
    width: '80%',
    padding: '10px',
  },
  button: {
    padding: '10px',
  }
}

const Input = ({ searchGem }) => {
  const [gemInput, useGemInput] = useState('rails');

  const updateInput = input => useGemInput(input);

  return (
    <div style={styles.container}>
      <input style={styles.input} type="text" value={gemInput} onChange={(e) => updateInput(e.target.value)}/>
      <button style={styles.button} onClick={() => searchGem(gemInput)} >Search</button>
    </div>
  );
}

export default Input;