/*
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21

Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
*/

// My Solution

const reverse = (x) => {
    let reversed = "";
    for(let char of x.toString()) {
        reversed = char + reversed;
    }
    let result = parseInt(reversed) * Math.sign(x);
    if (result >  2147483647 || result < -2147483647) {
        return 0;
    }
    return result;
};

//Test Cases
console.log(reverse(1234));
console.log(reverse(-45678));