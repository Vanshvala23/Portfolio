import React from 'react';
import './Card.scss';

import LeetCodeCard from './leetcodeCard/leetcodeCard';
import CodeforcesCard from './codeForcesCard/codeForcesCard';

const Card = () => {
  return (
    <div className="card-section">
      <h2>Competitive Programming Stats</h2>
      <div className="card-container">    
        <div className="card-wrapper">
          <h3>LeetCode</h3>
          <LeetCodeCard />
        </div>
        <div className="card-wrapper">
          <h3>Codeforces</h3>
          <CodeforcesCard />
        </div>
      </div>
    </div>
  );
};

export default Card;
