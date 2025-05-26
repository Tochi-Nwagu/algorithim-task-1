let sentence = 'Hello Tochi, welcome to class.';

let wordCount = 0;
let charCount = 0;
let vowelCount = 0;

// counts the charactters in the sentence including spaces, puntuation marks.
charCount = sentence.length;

console.log('Total number of characters:', charCount);

//counts the wordsin the sentence
let words = sentence.split(' ');
wordCount = words.length;
console.log('Number of words;', wordCount);

//count the vowels in the sentence
for (let i = 0; i < sentence.length; i++) {
  let char = sentence[i].toLowerCase();
  if ('aeiou'.includes(char)) {
    vowelCount++;
  }
}

console.log('total vowel count :', vowelCount);
