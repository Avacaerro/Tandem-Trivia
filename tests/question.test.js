"use strict";
/* eslint-disable no-undef */

const Question = require("../lib/question");

let question;

beforeEach(() => {
  question = new Question();
});

test('instanceof Question', () => {
  expect(question).toBeInstanceOf(Question);
});

test('isValidNumChoice returns a truthy value for valid input (1-4)', () => {
  expect(Question.isValidNumChoice(1)).toBeTruthy();
  expect(Question.isValidNumChoice(2)).toBeTruthy();
  expect(Question.isValidNumChoice(3)).toBeTruthy();
  expect(Question.isValidNumChoice(4)).toBeTruthy();
});

test('isValidNumChoice returns a falsy value for invalid inputs', () => {
  expect(Question.isValidNumChoice(5)).toBeFalsy();
  expect(Question.isValidNumChoice('z')).toBeFalsy();
  expect(Question.isValidNumChoice(26)).toBeFalsy();
  expect(Question.isValidNumChoice('%')).toBeFalsy();
  expect(Question.isValidNumChoice([])).toBeFalsy();
  expect(Question.isValidNumChoice({})).toBeFalsy();
  expect(Question.isValidNumChoice(undefined)).toBeFalsy();
});

test('setChoices assigns the property choices to an array of strings upon initialization', () => {
  expect(question.choices).toBeInstanceOf(Array);
  question.choices.forEach(choice => {
    expect(choice).toMatch(/.*/gi);
  });
});

test('choices property is an array of new values when setChoices is executed after nextQuestion', () => {
  let prevChoices = question.getChoices().sort();
  question.nextQuestion();
  question.setChoices();

  let newChoices = question.getChoices().sort();
  expect(prevChoices).not.toEqual(newChoices);
});

test('getCurrCorrect returns a string answer', () => {
  expect(question.getCurrCorrect()).toMatch(/.*/gi);
});

test('getCurrIncorrect returns an array of values', () => {
  expect(question.getCurrIncorrect()).toBeInstanceOf(Array);
});

test('getCurrQuestion returns a string answer', () => {
  expect(question.getCurrQuestion()).toMatch(/.*/gi);
});

test('getChosenAnswer returns a string with valid input (1-4)', () => {
  question.getChoices().forEach((_, idx) => {
    expect(question.getChosenAnswer(idx + 1)).toMatch(/.*/gi);
  });
});

test('getChosenAnswer returns undefined for invalid input', () => {
  expect(question.getChosenAnswer(5)).toBeUndefined();
  expect(Question.isValidNumChoice('z')).toBeFalsy();
  expect(question.getChosenAnswer({})).toBeUndefined();
  expect(question.getChosenAnswer([])).toBeUndefined();
  expect(question.getChosenAnswer(undefined)).toBeUndefined();
});

test('displayAllQuestions raises an error when questionsData is empty', () => {
  question.questionsData = null;
  expect(() => question.displayAllQuestions()).toThrow();
});

test('nextQuestion increments the questionData currIdx counter', () => {
  question.nextQuestion();
  question.nextQuestion();
  question.nextQuestion();
  expect(question.currIdx).toBe(3);
});

test('nextQuestion makes no changes when currIdx is greater than questionData length', () => {
  let length = question.questionsData.length
  question.currIdx = length;
  question.nextQuestion();
  
  expect(question.currIdx).toBe(length);
});

test('displayNextQuestion assigns new choices to the choices property after nextQuestion', () => {
  let prevChoices = question.getChoices().sort();
  question.nextQuestion();
  question.displayNextQuestion();

  let newChoices = question.getChoices().sort();
  expect(prevChoices).not.toEqual(newChoices);
});

test('resetQuestions resets currIdx and reshuffles the questionsData', () => {
  question.nextQuestion();
  question.nextQuestion();
  expect(question.currIdx).toBe(2);

  question.resetQuestions();
  expect(question.currIdx).toBe(0);
  expect(question.questionsData).not.toContainEqual(undefined);
});

test('randomizeChoices shuffles the choices array in place', () => {
  let prevChoices = question.choices;
  question.choices = question.randomizeChoices(question.choices);
  expect(question.choices).toEqual(prevChoices);
});

test('isCorrectAnswer returns a truthy or falsy value when answer is correct or incorrect', () => {
  question.questionsData = [
    {
      "question": "In a website address bar, what does WWW stand for?",
      "incorrect": ["Wild Wild West", "War World Web"],
      "correct": "World Wide Web"
    }
  ];
  question.choices = ["Wild Wild West", "War World Web", "World Wide Web"];
  
  expect(question.isCorrectAnswer(3)).toBeTruthy();
  expect(question.isCorrectAnswer(1)).toBeFalsy();
});

test('displayAllQuestions maps questionsData to an array of question strings and returns undefined', () => {
  let arr = question.questionsData.map(obj => obj.question);
  arr.forEach(question => {
    expect(question).toMatch(/.*/gi);
  });

  expect(question.displayAllQuestions()).toBeUndefined();
});

test('isCorrectAnswer with an invalid numChoice will default numChoice to 1', () => {
  question.questionsData = [
    {
      "question": "In a website address bar, what does WWW stand for?",
      "incorrect": ["Wild Wild West", "War World Web"],
      "correct": "World Wide Web"
    }
  ];
  question.choices = ["Wild Wild West", "War World Web", "World Wide Web"];

  expect(question.isCorrectAnswer('z')).toBeFalsy();
}); 