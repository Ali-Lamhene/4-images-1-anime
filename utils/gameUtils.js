export function shuffleLetters(name) {
  const letters = name.toUpperCase().replace(/\s/g, '').split('');
  
  // Ajouter quelques lettres supplémentaires aléatoires
  const extraLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numExtra = Math.min(6, Math.floor(letters.length / 2));
  
  for (let i = 0; i < numExtra; i++) {
    const randomLetter = extraLetters[Math.floor(Math.random() * extraLetters.length)];
    letters.push(randomLetter);
  }
  
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