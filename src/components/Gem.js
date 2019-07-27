import React from 'react';

const Gem = ({ gem, handleSave, isSaved }) => {
  const { name } = gem;
  
  return (
    <div className="gem">
      <p>{ name }</p>
      <div>
        <button
          type="button"
          className='save-btn'
          onClick={() => handleSave(gem, isSaved)}
        >
          { isSaved ? 'Unsave' : 'Save' }
        </button>
      </div>
    </div>
  );
}

export default Gem;