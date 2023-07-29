/*
You are reading a Build Your Own Story book. It is like a normal book except that choices on some pages affect the story, sending you to one of two options for your next page.

You start reading at page 1 and read forward one page at a time unless you reach a choice or an ending.

The choices are provided in a list, sorted by the page containing the choice, and each choice has two options of pages to go to next. In this example, you are on page 3, where there is a choice. Option 1 goes to page 7 and Option 2 goes to page 8.

choices1_1 = [
  [3, 7, 8], 
  [9, 4, 2]
]

 => [[current_page, option_1, option_2], ...]
The ending pages are also given in a sorted list:

endings1 = [6, 15, 21, 30]

These choices are really stressing you out, so you decide that you'll either always pick the first option, or always pick the second option.

Given a list of endings, a list of choices with their options, and the choice you will always take (Option 1 or Option 2), return the ending you will reach. If you get stuck in a loop, return -1.

Example:
stories(endings1, choices1_1, 1) (always Option 1)
  Start: 1 -> 2 -> 3(choice) -> 7 -> 8 -> 9(choice) -> 4 -> 5 -> 6(end) => Return 6

stories(endings1, choices1_1, 2) (always Option 2)
  Start: 1 -> 2 -> 3(choice) -> 8 -> 9(choice) -> 2 -> 3(choice) -> 8 ... => Return -1

Additional inputs:
choices1_2 = [[3, 14, 2]]
choices1_3 = [[5, 11, 28], [9, 19, 29], [14, 16, 20], [18, 7, 22], [25, 6, 30]]
choices1_4 = [[2, 10, 15], [3, 4, 10], [4, 3, 15], [10, 3, 15]]

endings2 = [11]
choices2_1 = [[2, 3, 4], [5, 10, 2]]
choices2_2 = []

Complexity Variable:
n = number of pages
(endings and choices are bound by the number of pages)

All Test Cases :
stories(endings1, choices1_1, 1) => 6
stories(endings1, choices1_1, 2) => -1
stories(endings1, choices1_2, 1) => 15
stories(endings1, choices1_2, 2) => -1
stories(endings1, choices1_3, 1) => 21
stories(endings1, choices1_3, 2) => 30
stories(endings1, choices1_4, 1) => -1
stories(endings1, choices1_4, 2) => 15
stories(endings2, choices2_1, 1) => 11
stories(endings2, choices2_1, 2) => -1
stories(endings2, choices2_2, 1) => 11
stories(endings2, choices2_2, 2) => 11

stories(endings1, choices1_2, 1) => 15
endings1 = [6, 15, 21, 30]
choices1_2 = [[3, 14, 2]]
        page 14 (option 1)
      /
page 3
      \ page 2 (option 2)
      
1->2->3->14->15

stories(endings1, choices1_3, 1) => 21
endings1 = [6, 15, 21, 30]
 [[5, 11, 28], [9, 19, 29], [14, 16, 20], [18, 7, 22], [25, 6, 30]]

1->2,3,4,5,11,12,13,14,16,1

 */

"use strict";

function stories(endings, choices, option) {
  // TODO:
  // Loop start from 1
  // If the loop counter is equal to first value inside the choices, use option number
  // change the counter to the number of the option, then continue counting.
  // While last two lines is happening, check if the number is an ending.
  
  const lastPage = Math.max(...endings);
  const firstChoiceList = choices.map(([firstChoice]) => firstChoice);
  for (let i = 0; i < lastPage; i++) {
    if (endings.includes(i)) {
      return i;
    }

    if (firstChoiceList.includes(i)) {
      // Get the option1 or option2 of the choices
      const [finalChoice] = choices.filter((choice) => {
        return choice[0] === i;
      });

      console.log('finalChoice[option]', finalChoice[option])
      i = finalChoice[option]; // Start the counter from the option
    }
  }
  return -1;
}

/**
 *
const choices1_1 = [
  [3, 7, 8], // 3 is current page, 7 is option 1 page, 8 is option 2 page
  [9, 4, 2] // 9 is current page, 4 is option 1 page, 2 is option 2 page
];
 */

const endings1 = [6, 15, 21, 30];
const choices1_1 = [
  [3, 7, 8],
  [9, 4, 2]
];
const choices1_2 = [
  [3, 14, 2]
];
const choices1_3 = [
  [5, 11, 28],
  [9, 19, 29],
  [14, 16, 20],
  [18, 7, 22],
  [25, 6, 30]
];
const choices1_4 = [
  [2, 10, 15],
  [3, 4, 10],
  [4, 3, 15],
  [10, 3, 15]
];

const endings2 = [11];
const choices2_1 = [
  [2, 3, 4],
  [5, 10, 2]
];
const choices2_2 = [];

console.log('response1',stories(endings1, choices1_1, 1)); // 6
console.log('response2',stories(endings1, choices1_2, 1)); // 15

// console.log('response',stories(endings1, choices1_1, 1));
// console.log('response',stories(endings1, choices1_1, 1));
// console.log('response',stories(endings1, choices1_1, 1));
// console.log('response',stories(endings1, choices1_1, 1));
// console.log('response',stories(endings1, choices1_1, 1));
// stories(endings1, choices1_1, 2) => -1
// stories(endings1, choices1_2, 1) => 15
// stories(endings1, choices1_2, 2) => -1
// stories(endings1, choices1_3, 1) => 21
// stories(endings1, choices1_3, 2) => 30
// stories(endings1, choices1_4, 1) => -1
// stories(endings1, choices1_4, 2) => 15
// stories(endings2, choices2_1, 1) => 11
// stories(endings2, choices2_1, 2) => -1
// stories(endings2, choices2_2, 1) => 11
// stories(endings2, choices2_2, 2) => 11
