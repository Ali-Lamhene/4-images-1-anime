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