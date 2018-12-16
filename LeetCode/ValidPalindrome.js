/* Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true
Example 2:

Input: "race a car"
Output: false
*/

var isPalindrome = function(s) {
    s = s.replace(/[^\w]/g, "").toLowerCase();
    let reversed = "";
    for(let char of s) {
        reversed = char + reversed;
    }
    return reversed === s;
};