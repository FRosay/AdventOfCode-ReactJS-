import React from 'react';
import dayOne from './aoc/daysOneToTen/dayOne.js';
import dayTwo from './aoc/daysOneToTen/dayTwo.js';
import dayThree from './aoc/daysOneToTen/dayThree.js';
import './style.css';

export default function App() {

  return (
    <div>
      <h1>JavaScript advent of code answers</h1>
      <p>Day 1-1 : {dayOne(1)} / 1-2 : {dayOne(2)}</p>
      <p>Day 2-1 : {dayTwo(1)} / 2-2 : {dayTwo(2)}</p>
      <p>Day 3-1 : {dayThree(1)} / 3-2 : {dayThree(2)}</p>
    </div>
  );
}
