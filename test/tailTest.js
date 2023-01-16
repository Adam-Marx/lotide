const assertEqual = require('../assertEqual');
const tail = require('../tail');


const words = ["Hello", "Lighthouse", "Labs"];


assertEqual(tail(words).length, 2);
assertEqual(tail(words), ["Lighthouse", "Labs"]);
assertEqual(words.length, 3);