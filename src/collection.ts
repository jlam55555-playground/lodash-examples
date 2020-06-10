// mentioned all of the array functions in array.ts to get a feel for lodash,
// but here I'm not going to focus so much on trying/listing all of the functions, the documentation's there for that
import * as _ from 'lodash';

// map values using function, then count frequency of mapped variables; like groupBy followed by count
// without passing in a function, map is the identity function
console.log('countBy',
    _.countBy([6.1, 4.2, 6.3], Math.floor),
    _.mapValues(_.groupBy([6.1, 4.2, 6.3], Math.floor), 'length'));

// every, filter, find, findLast, forEach (each), forEachRight, eachRight act as expected
// however, note that they also work on objects

// note for forEach, if there is a length property, then will attempt to iterate over numeric keys; to iterate
// over actual properties for an object with a length property, use forOwn
// also forOwn, forIn

console.log('flatMap',
    _.flatMap([1, 2], e => [e, e]));
// also flatMapDeep, flatMapDepth

// orderBy allows sorting by multiple fields (i.e., multiple sorts to break tiebreakers), and the ability to choose
// ascending/descending for each sorting criteria/tiebreaker

console.log('partition',
    _.partition([-2, 4, 3, -5, 5, 5, 0, -1], e => e>=0));

interface E {
    a: number;
    b: number;
}
console.log('reduce',
    _.reduce([{a: 2, b: 4}, [123, 52], {a: 5}], _.assign),
    _.reduce([{a: 2, b: 4}, [123, 52], {a: 5}], _.defaults),
    _.reduce([[(e: E) => e.a], [(e: E) => e.b]], _.sortBy, <E[]>[{a: 3, b: 2}, {a: 3, b: 3}, {a: 2, b: 15}, {a: -2, b: 3}]));
// functions like assign, defaults, sortBy are guarded to do this correctly
// can also do this with orderBy (acts like sortBy since third argument isn't provided)
// and supposedly also with includes, but I have no idea how

console.log('sample',
    _.sample([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// also: sampleSize, shuffle
