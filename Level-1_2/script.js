const { firstIndex, allButLast, lastIndex, allButFirst, remover, removeDuplicates, sum, randomGenerator, capitalaizer, upperCaser, wordChecker } = require("./functions");

const { names, numbers } = require("./data");

console.log("The first element of array: ", firstIndex(names));

console.log("The array without the last element: ", allButLast(names));

console.log("The last element of array: ", lastIndex(names));

console.log("The array without the first element: ", allButFirst(names));

console.log("The array after removing 'simon' element: ", remover(names, "simon"));

console.log("The array after removing the duplicates: ", removeDuplicates
    (numbers));

console.log("the SUM of all numbers in Number Array: ", sum(numbers))

console.log("the rendom Number between 100 & 298: ", randomGenerator(100, 298))

console.log("'samuel aliyari' Capitalaized: ", capitalaizer("samuel aliyari"))

console.log("to upper case 'samuel': ", upperCaser("samuel"))

console.log("'a' is the first letter og 'Aliyari': ", wordChecker("Aliyari", "a"))

console.log("'t' is the first letter og 'Aliyari': ", wordChecker("Aliyari", "t"))