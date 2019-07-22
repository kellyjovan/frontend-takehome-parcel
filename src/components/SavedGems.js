import React from 'react';
import Gem from './Gem';

const styles = {
  container: {

  }
}

const SavedGems = ({ savedGems, handleSave }) => {
  const gems = Object
    .keys(savedGems)
    .map(gem => {
      return (
        <Gem key={`saved-gem-${gem}`} gem={savedGems[gem]} handleSave={handleSave} isSaved={true}></Gem>
      );
    });

  return (
    <ul style={styles.container}>
      { gems.length ? gems : 'No Gems Saved'}
    </ul>
  )
}

export default SavedGems;