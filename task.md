Question
What You're Aiming For

At this checkpoint, you are asked to write an algorithm that reads a sentence, which ends with a point, character by character, and to determine:

Instructions

The length of the sentence (the number of characters).
The number of words in the sentence (assuming that the words are separated by a single space).
The number of vowels in the sentence.
You have to keep in mind that:

Each character will be treated separately.
The last character is the point.
Use three variables as counters.

SOLUTION

1. Create a variable to hold all our data
   i. we will need 4 variables:
   let sentence;
   for the variables to hold the count or that will be the counter, initalise count at 0.
   let wordCount = 0;
   let charCount = 0;
   let vowelCount = 0;
2. To calculate the length of the sentence, the JavaScript "length()" property will be used (spaces and punctation marks will be
   counted as well)
   example:
   Since we have already declared the variable sentence, we will simply assign our string data type to it.
   sentence = "The fox is hungry."
   charCount = sentence.length //18
3. To check the number of words in the sentences, we will:
   i. use the split() method to remove the spaces in the  sentence,  but we will do it by breaking it up once we get to any empty space
   example: let words = sentence.split(" "); will give the following :
   the
   fox
   is
   hungry
   as individual words

   wordCount = words.length //4
   ii. then using the length property once again count the number of words in the sentence. in this example we will have 4 words in the sentence.
   4.To check for vowels, we will use the "For Loop" to iterate through the sentence
   for(let i = 0; i < sentence.length; i++)
   i. i = 0 (initialise. we only do this once);
   ii. i < sentence.length (Condition, check if the position of the letter is less than the length of the sentence), if true check if it is a vowel.
   iii. then check if the letter is a vowel, add to the vowel counter, and then,
   iv. i++ (then loop over to the next letter until we are at the end of the sentence)
   to do this we will implement it as follows:
   first all initialize, check condition and increment:
   <!-- for(let i = 0; i < sentence.length; i++){
     let char = sentence[i].lowerCase() //we will convert all characters to lower case because A and a are not the same
      //check if the character is a vowel using the IF Statement
      if('aeiou'.includes(char)) { //check if the character is a vowel
        vowelCount++; // if a vowel increase the vowel counter
      }
   } -->

   in the above example we will have 4 vowels e, o, i, u
