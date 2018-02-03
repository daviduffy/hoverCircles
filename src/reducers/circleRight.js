const circleRightReducerDefaultState = [[{},{},{},{}],{},{},{}];
export default (state = circleRightReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// case 'SOLVE_PUZZLE':
//   // this is the same as 'SOFT_RESET_PUZZLE' :(
//   const strippedGuesses = stripGuesses(state);
//   return makeGuess({
//     allGuesses: strippedGuesses
//   });
// case 'EDIT_GUESS':
//   return state.map(guess => {
//     if (guess.index === action.index) {
//       return {
//         // grab and use existing properties
//         ...guess,
//         // override any existing properties with the updates from the updates object
//         ...action.updates
//       };
//     }
//     return guess;
//   });
// case 'HARD_RESET_PUZZLE':
//   return state.map((guess, ind) => singleGuess(ind));
// case 'SOFT_RESET_PUZZLE':
//   return stripGuesses(state);
