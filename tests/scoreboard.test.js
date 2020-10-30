"use strict";
/* eslint-disable no-undef */
const Score = require("../lib/scoreboard");

let score;

beforeEach(() => {
  score = new Score();
});

test('incrementPlayerScore increments the playerScore property by 40', () => {
  expect(score.playerScore).toBe(0);

  score.incrementPlayerScore();
  expect(score.playerScore).toBe(40);
});

test('incrementPlayerIncorrectCount increments the playerIncorrectCount property by 1', () => {
  expect(score.playerIncorrectCount).toBe(0);

  score.incrementPlayerIncorrectCount();
  expect(score.playerIncorrectCount).toBe(1);
});

test('incrementPlayerCorrectCount increments the playerCorrectCount property by 1', () => {
  expect(score.playerCorrectCount).toBe(0);

  score.incrementPlayerCorrectCount();
  expect(score.playerCorrectCount).toBe(1);
});

test('getPlayerStats returns an object with values from the score instance properties', () => {
  score.incrementPlayerScore();
  score.incrementPlayerIncorrectCount();
  score.incrementPlayerCorrectCount();

  expect(score.getPlayerStats()).toEqual({
    playerScore: 40,
    playerIncorrectCount: 1,
    playerCorrectCount:1
  });
});