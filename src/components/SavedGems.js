import React from 'react';
import Gem from './Gem';

const SavedGems = ({ savedGems, handleSave }) => {
  const gems = Object
    .keys(savedGems)
    .map(gem => {
      return (
        <Gem
          key={`saved-gem-${gem}`}
          gem={savedGems[gem]}
          handleSave={handleSave}
          isSaved={true}>
        </Gem>
      );
    });

  return (
    <div className="saved-gems">
      <h1>Saved Gems</h1>
      <ul>
        { !gems.length
          ? <p className="no-results">No Gems Saved</p>
          : gems
        }
      </ul>
    </div>
  )
}

export default SavedGems;