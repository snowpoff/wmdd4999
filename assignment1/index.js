'use strict';

console.log("Loading function");

exports.handler = (event, context, callback) => {
    
    let num1 = Number(event.num1)
    let num2 = Number(event.num2)
    let sum = num1 + num2
    
    let message = num1 + " + " + num2 + " = " + sum
    
    callback(null, message);
};
