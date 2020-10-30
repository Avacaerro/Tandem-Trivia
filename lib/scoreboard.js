class Score {
  constructor() {
    this.resetScores();
  }

  incrementPlayerScore() {
    this.playerScore += 40;
  }

  incrementPlayerIncorrectCount() {
    this.playerIncorrectCount += 1;
  }

  incrementPlayerCorrectCount() {
    this.playerCorrectCount += 1;
  }

  resetScores() {
    this.playerScore = 0;
    this.playerIncorrectCount = 0;
    this.playerCorrectCount = 0;
  }

  getPlayerStats() {
    return {
      playerScore: this.playerScore,
      playerIncorrectCount: this.playerIncorrectCount,
      playerCorrectCount: this.playerCorrectCount
    };
  }
}

module.exports = Score;