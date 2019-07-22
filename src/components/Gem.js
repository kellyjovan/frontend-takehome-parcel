import React from 'react';

const styles = {
  container: {
    padding: '5px 15px',
    margin: '5px 0',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '5px'
  },
  gemName: {
    flexBasis: '80%',
  },
  buttonContainer: {
    flexBasis: '20%',
    textAlign: "right",
  }
}

const Gem = ({ gem, handleSave, isSaved }) => {
  const { name } = gem;
  console.log(isSaved);
  return (
    <div style={styles.container}>
      <p style={styles.gemName}>{ name }</p>
      <div style={styles.buttonContainer}>
        <button onClick={() => handleSave(gem, isSaved)}>{ isSaved ? 'UnSave' : 'Save' }</button>
      </div>
    </div>
  );
}

export default Gem;