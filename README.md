# Tandem Trivia
A simple trivia game based command-line application. The application displays questions parsed from a JSON file while the user is able to select answers using keyboard input. This was created for the [October 2020 Tandem Code Challenge](https://madeintandem.com/blog/software-engineering-apprenticeship-program-open-applications-monday-october-26/). 

## Challenge Criteria
The goal is to create an application that displays trivia questions with multiple-choice answers to select from.
- A user can view questions.
- Questions with their multiple choice options must be displayed one at a time. 
- Questions should not repeat in a round.
- A user can select only 1 answer out of the 4 possible answers.
- The correct answer must be revealed after a user has submitted their answer. 
- A user can see the score they received at the end of the round.

## Built With
- [Node.js](https://nodejs.org/en/docs/) - JS runtime
- [readline-sync](https://www.npmjs.com/package/readline-sync) - User input
- [Jest.js](https://jestjs.io/docs/en/getting-started) - Unit Testing

## Tests
```
npm run test
```

## How to use?
OS X & Linux:
```
npm install

chmod +x trivia

./trivia
```

## Like to add features
- Leaderboard to compare scores
- Previous individual score history
- Tracking which questions are answered correctly and incorrectly the most
- Manage questions from the app to add and remove
- Ability to add countdown timer for an answer to be picked
- Modify game parameters (# of questions, point accumulation, # of rounds to play)

## Known Issues
- Displaying all the questions is not static as the order is being randomized when a Question object is initialized.

## License
This project is licensed under the MIT License. See the [LICENSE](https://github.com/Avacaerro/Tandem-Trivia/blob/main/LICENSE) for details.