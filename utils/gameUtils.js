import { RANKS } from '../constants/game';

export function shuffleLetters(name) {
  const letters = name.toUpperCase().replace(/\s/g, '').split('');

  // Mélanger le tableau
  for (let i = letters.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [letters[i], letters[j]] = [letters[j], letters[i]];
  }
  return letters;
}

export function normalizeString(str) {
  return str.toUpperCase().replace(/\s/g, '');
}

export function checkAnswer(userAnswer, correctAnswer) {
  const userString = userAnswer.filter(l => l !== null).join('');
  const correctString = normalizeString(correctAnswer);
  return userString === correctString;
}

export function calculateLevel(xp) {
  // Parcourir les rangs du plus haut au plus bas pour trouver le premier où minXP <= xp
  const sortedRanks = [...RANKS].sort((a, b) => b.minXP - a.minXP);
  const currentRank = sortedRanks.find(rank => xp >= rank.minXP);
  return currentRank ? currentRank.level : 1;
}