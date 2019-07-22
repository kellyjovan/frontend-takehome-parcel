import React from 'react';
import Gem from './Gem';
import SavedGems from './SavedGems';

const styles = {
  container: {
    display: 'flex',
  },
  gemResContainer: {
    padding: '15px',
    flexBasis: '75%',
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    gridGap: '1em'
  },
  noRes: {
    textAlign: 'center',
  },
  savedGemsContainer: {
    flexBasis: '25%',
  }
}

const GemsContainer = ({ gems, handleSave, savedGems }) => {
  const gemComponents = gems.map((gem) => {
    const isSaved = savedGems[gem.name] ? true : false;
    return (
      <Gem key={`gem-${gem.name}`} gem={gem} handleSave={handleSave} isSaved={isSaved} />
    );
  })

  return (
    <main style={styles.container}>
      <section style={styles.gemResContainer}>
        { gemComponents.length ? gemComponents : <p style={styles.noRes}>No Gems Found.</p> }
      </section>
      <aside style={styles.savedGemsContainer}>
        <SavedGems savedGems={savedGems} handleSave={handleSave}/>
      </aside>
    </main>
  );
}

export default GemsContainer;