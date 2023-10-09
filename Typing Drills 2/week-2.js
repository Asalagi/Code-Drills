// WEEK TWO DAY ONE - 10/09/2023
0-.1 + 0.2 - 0.3 < Number.EPSILON // returns the difference between the smallest floating point number greater than 1 and 1.
// Number.EPSILON value of 2.220446049250313e-16

for (let i = 0; i < str.length; i++) {
    console.log (str.charAt(i));
}

for (let index in str) {
    console.log(str[index]);
}

for (let value of str) {
    console.log(value);
}

[...str].forEach((value) =>  console.log(value));


const num1 = 10,
    num = 20;
    `The sum of ${num1} and ${num2} is ${num1 + num2}`;

let person = 'John';
let membership = [1, 3];

function myTag(strings, person, membership) {
    let communities = ["Java", "Javascript", "TypeScript", "HTML", "CSS"];

    let str0 = string[0];
    let str1 = string[1];

    let personCommunities = membership.map((index) => communities[index]);
    return `${str0}${person}${str1}${personCommunities}`;
}

myTag`Note: ${person} is a member of following communities ${membership}`;
