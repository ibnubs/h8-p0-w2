//Exercise 5- Bermain dengan String di JavaScript
//Soal 1. Let's Form a Sentence

//Hasil Output yang ingin dicapai soal 1
//JavaScript is awesome and I love it!JavaSc

//Input

var word = 'JavaScript';
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it!';

//Output
word = word + ' ' + second + ' ' + third + ' ' + fourth + ' ' + fifth + ' ' + sixth + ' ' + seventh;
console.log (word);

//End of Soal 1

//Soal.2 Index Accessing -1 by 1

// Hasil Output yang ingin dicapai soal 2
// First Word: wow
// Second Word: JavaScript
// Third Word: is
// Fourth Word: so
// Fifth Word: cool

//Input
var word = 'wow JavaScript is so cool';
var exampleFirstWord = word[0] + word[1] + word[2];
var secondWord = word[4] + word[5] + word[6] + word [7] + word [8] + word [9] + word [10] + word [11] + word [12] + word [13];
var thirdWord = word [15] + word [16];
var fourthWord = word [18] + word [19];
var fifthWord = word [21] + word [22] + word [23] + word [24];

//Output
console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);

//End of Soal.2

//soal.3 Breaking Sentence (Again) using Substring

// Hasil Output yang ingin dicapai soal 3
// First Word: wow
// Second Word: JavaScript
// Third Word: is
// Fourth Word: so
// Fifth Word: cool

//Input
var word3 = 'wow JavaScript is so cool';
var exampleFirstWord3 = word3.substring(0, 3);
var secondWord3       = word3.substring(4, 14);
var thirdWord3        = word3.substring(15, 17);
var fourthWord3       = word3.substring(18, 20);
var fifthWord3        = word3.substring(21, 25);

//Output
console.log('First Word: ' + exampleFirstWord3);
console.log('Second Word: ' + secondWord3);
console.log('Third Word: ' + thirdWord3);
console.log('Fourth Word: ' + fourthWord3);
console.log('Fifth Word: ' + fifthWord3);

//End of Soal.3

//Soal.4 Breaking Sentence (yet Again) and Count Each Length

// Hasil Output yang ingin dicapai soal 4
// First Word: wow, with length: 3
// Second Word: JavaScript, with length: 10
// Third Word: is, with length: 2
// Fourth Word: so, with length: 2
// Fifth Word: cool, with length: 4


var word4 = 'wow JavaScript is so cool';
var exampleFirstWord4 = word4.substring(0, 3);
var secondWord4       = word4.substring(4, 14);
var thirdWord4         = word4.substring(15, 17);
var fourthWord4       = word4.substring(18, 20);
var fifthWord4        = word4.substring(21, 25);


var firstWordLength = exampleFirstWord4.length;
var secondWordLength = secondWord4.length;
var thirdtWordLength = thirdWord4.length;
var fourthWordLength = fourthWord4.length;
var fifthWordLength = fifthWord4.length;


console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondWord4 + ', with length: ' + secondWordLength);
console.log('Third Word: ' + thirdWord4 + ', with length: ' + thirdtWordLength);
console.log('Fourth Word: ' + fourthWord4 + ', with length: ' + fourthWordLength);
console.log('Fifth Word: ' + fifthWord4 + ', with length: ' + fifthWordLength);

//End of Soal 4