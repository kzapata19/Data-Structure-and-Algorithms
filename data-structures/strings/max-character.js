/*
Given a string of characters, return the character that appears the most often.

describe("Max Character", () => {
 it("Should return max character", () => {
  assert.equal(max("Hello World!"), "l");
 });
});

*/

/*
Parameters:
- string of characters
- can be empty string? (let's say yes for now)

Return:
- the character (in string format) that has the most frequent appearance
- for this problem, let's assume the lowercase and uppercase characters are equal

Edge Cases/Examples:
- " " -> null
- "Hello World" -> "l" 
- "Hello, Larry" -> "l" (lower cased the L; l appears 3 times, r appears 2 times)
- "hhheeelo" => since its a tie between h and e, lets return the element that appears first in the string -> "h"

Pseudocode:
- convert the string to lowercase
- create a dictionary of the string elements with the unique elem as the key and the count as the value
- iterate through the dictionary to find the largest count
- if there is a tie between one or more elements, return the element that appears first in the original string
*/

let maxCharacter(str) {
    let lowerCased = str.toLowerCase();
    let dict = {}
    for(let char of lowerCased) {
        dict[char] = dict[char]++ || 1
    }
    let max = 0;
    let chars = []
    for(let elem in dict) {
        if(dict[elem] >= max) {
            chars.push(elem)
            max = dict[elem]
        }
    }
    if(chars.length === 1) {
        return chars[0];
    } else {
        
    }
}