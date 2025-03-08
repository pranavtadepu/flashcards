import React from 'react';

const Display = ({ flashCards, index, flipped }) => {
  const card = flashCards[index];
  return (
    <div className="display">
      {flipped ? <h3>{card.ans}</h3> : <h3>{card.ques}</h3>}
    </div>
  );
};

export default Display;