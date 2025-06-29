// src/components/leetCodeCard/LeetCodeCard.js
import React from "react";
import "./lcard.scss"; // Optional styling file

export default function LeetCodeCard() {
  return (
    <div className="card-container">
      <a
        href="https://leetcode.com/vanshvala01"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://leetcard.jacoblin.cool/vanshvala01?ext=heatmap"
          alt="LeetCode Stats"
          className="leetcode-card"
        />
      </a>
    </div>
  );
}
