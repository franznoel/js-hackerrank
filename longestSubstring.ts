function lengthOfLongestSubstring(s: string): number {
  const letters = s.split('');
  let words = letters;
  
  for (let i = 0; i < letters.length; i++) {
    const letter = letters[i];
    
    for (let i = 0; i < words.length; i++) {
      const word: string[] = words[i];
      const wordLetters = word.split("");
      if (wordLetters.includes(letter)) {
        wordLetters.push('-');
      }
      
      console.log('word', word);

      const hasWordEnded = wordLetters[wordLetters.length - 1] === '-';      
      if (!hasWordEnded && !wordLetters.includes(letter)) {
        wordLetters.push(letter);
      }

      const newWord = wordLetters.join('');
      words[i] = newWord;
    }
  }
  
  console.log('words', words);
  
  const wordLengths = words
    .map((word, wordIndex, self) => word.length)
  
  return Math.max(...wordLengths)
};



// Prepare a word container for each letter

// Loop the letters
// If the next letter is not found inside the word, add the next letter
// If the next letter exists inside the word, add an end mark
// If there is no next letter, add an end mark

// Remove the end mark for each letter

// Get the length of each words, and return the longest one



