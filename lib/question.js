const QUESTIONS_DATA = require("./parseJSON");
const shuffle = require("./shuffle");

class Question {
  constructor() {
    this.questionsData = JSON.parse(JSON.stringify(QUESTIONS_DATA));
    this.resetQuestions();
  }

  static isValidNumChoice(numChoice) {
    return [1, 2, 3, 4].includes(Number(numChoice));
  }

  setChoices() {
    this.choices = this.randomizeChoices(
      this.getCurrIncorrect().concat(this.getCurrCorrect()));
  }

  getChoices() {
    return this.choices;
  }

  getCurrCorrect() {
    return this.questionsData[this.currIdx].correct;
  }

  getCurrIncorrect() {
    return this.questionsData[this.currIdx].incorrect;
  }

  getCurrQuestion() {
    return this.questionsData[this.currIdx].question;
  }

  getChosenAnswer(numChoice) {
    return this.getChoices()[numChoice - 1];
  }

  displayAllQuestions() {
    console.log("These are the available questions:\n");
    this.questionsData
      .map(obj => obj.question)
      .forEach(
        (question, idx) => console.log(`\t${idx + 1}: ${question}`)
      );
  }

  nextQuestion() {
    if (this.currIdx < this.questionsData.length) {
      this.currIdx += 1;
    } else {
      console.log("Reached end of questions.");
    }
  }

  displayNextQuestion() {
    this.setChoices();
    let question = this.getCurrQuestion();
    let choices = this.getChoices();
    console.log(`Question #${this.currIdx + 1}: ${question}`);
    choices.forEach((choice, idx) => console.log(`  ${idx + 1}) ${choice}`));
    console.log();
  }

  resetQuestions() {
    this.currIdx = 0;
    shuffle(this.questionsData);
    this.setChoices();
  }

  randomizeChoices(choices) {
    return shuffle(choices);
  }

  isCorrectAnswer(numChoice) {
    if(!Question.isValidNumChoice(numChoice)) {
      console.log("Invalid number entered. Defaulting to answer 1.");
      numChoice = 1;
    }
    let answer = this.getChosenAnswer(numChoice);
    return answer === this.getCurrCorrect();
  }
}

module.exports = Question;