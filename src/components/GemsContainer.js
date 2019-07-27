import React from 'react';
import Gem from './Gem';
import SavedGems from './SavedGems';

const styles = {
  container: {
    display: 'flex',
    position: 'relative',
    margin: '0 5vw',
  },
  gemResContainer: {
   
  },
  noRes: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  savedGemsContainer: {
    flexBasis: '28%',
    height: '100%',
  }
}
const GemsContainer = ({ gems, handleSave, savedGems }) => {
  const gemComponents = gems.map((gem) => {
    const isSaved = savedGems[gem.name] ? true : false;

    return (
      <Gem
        key={`gem-${gem.name}`}
        gem={gem}
        handleSave={handleSave}
        isSaved={isSaved}
      />
    );
  })

  return (
    <main className="gems-container">
      <section>
        <h1>Gems</h1>
        <section className="gems-results">
          {gemComponents.length ? gemComponents : <p className="no-results">No Gems Found.</p>}
        </section>
      </section>
      <aside style={styles.savedGemsContainer}>
        <SavedGems
          savedGems={savedGems}
          handleSave={handleSave}
        />
      </aside>
    </main>
  );
}

export default GemsContainer;