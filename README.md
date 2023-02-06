# JS Copy vs Reference

## Description

These repository contains some examples to see the difference between reference and copy when using arrays and objects, as well as a series of methods to copy them.

## Javascript Used

Arrays

* slice()
* concat()
* spread operator
* Array.from()

Objects

* Object.assign()
* spread operator
* JSON.parse()
* JSON.stringify()

## Arrays

` const originalArray = ['Wes', 'Sarah', 'Ryan', 'Mike'];`

*slice()*
`const newArray = originalArray.slice();`
*concat()*
`const newArray = [].concat(originalArray);`
*spread operator*
`const newArray = [... originalArray];`
*Array.from()*
`const newArray = Array.from(originalArray);`

## Objects

` const originalObject = {name: 'Wes', age: 100};`

*Object.assign(empty object, object to copy, new properties)*
`const newObject = Object.assign({}, originalObject, {number: 12});`
*spread operator*
`const newObject = {... originalObject};`
*JSON.parse & JSON.stringify*
`const newObject = JSON.parse(JSON.stringify(originalObject));`

## Credits

* [30 Day Vanilla JS Coding Challenge](https://javascript30.com/)

