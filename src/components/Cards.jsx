import { useState } from 'react';
import './Cards.css';
const Cards = () => {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const flashCards = [
    {
      ques: 'What is Vite?',
      ans: 'A build tool for modern web development',
    },
    {
      ques: 'What is React?',
      ans: 'A JavaScript library for building user interfaces',
    },
    {
      ques: 'What is the capital of France?',
      ans: 'Paris',
    },
    {
      ques: 'What is the capital of Italy?',
      ans: 'Rome',
    }
  ];

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  const handleNext = () => {
    const randomIndex = Math.floor(Math.random() * flashCards.length);
    setIndex(randomIndex);
    setFlipped(false);
  };

  return (
    <div>
      <p>Lets test your knowledge</p>
      <p>Number of cards: {flashCards.length}</p>
      <div className="card" onClick={handleFlip}>
        {flipped ? <p>{flashCards[index].ans}</p> : <p>{flashCards[index].ques}</p>}
      </div>
      <button onClick={handleNext} className="arrow-button">→</button>
    </div>
  );
};

export default Cards;