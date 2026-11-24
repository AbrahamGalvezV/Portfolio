import { COLORS } from "../components/ColorSelector/colors"

export const generateSecret = (length) =>
  Array.from({ length }, () => {
    const index = Math.floor(Math.random() * COLORS.length);
    return COLORS[index].id;
  });

export const getGuess = (board, row) => board.map((column) => column[row]);

export const evaluateGuess = (secret, guess) => {
  let exact = 0;
  const secretLeft = {};
  const guessLeft = {};

  secret.forEach((color, i) => {
    if (guess[i] === color) {
      exact++;
    } else {
      secretLeft[color] = (secretLeft[color] ?? 0) + 1;
      guessLeft[guess[i]] = (guessLeft[guess[i]] ?? 0) + 1;
    }
  });

  const partial = Object.keys(guessLeft).reduce(
    (sum, color) => sum + Math.min(guessLeft[color], secretLeft[color] ?? 0),
    0
  );

  return { exact, partial };
};
