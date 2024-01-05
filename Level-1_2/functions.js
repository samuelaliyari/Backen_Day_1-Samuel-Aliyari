const firstIndex = arr => arr[0];

const allButLast = arr => [...arr].slice(0, -1);

const lastIndex = arr => [...arr].pop();

const allButFirst = arr => [...arr].slice(1);

const remover = (arr, toRemove) => arr.filter((elt) => elt.toLowerCase() !== toRemove.toLowerCase() ? elt :
    null);

const removeDuplicates = arr => new Set(arr);

const sum = arr => arr.reduce((a, b) => a + b, 0);

const randomGenerator = (minNum, maxNum) => Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);

const capitalaizer = string => {
    return string.split(" ").map(word => (word.slice(0, 1).toUpperCase()).concat(word.slice(1))).join(" ")
};

const upperCaser = string => string.toUpperCase();

const wordChecker = (string1, string2) => !!(string1.charAt(0).toLowerCase() === string2.toLowerCase());


module.exports = { firstIndex, allButLast, lastIndex, allButFirst, remover, removeDuplicates, sum, randomGenerator, capitalaizer, upperCaser, wordChecker }