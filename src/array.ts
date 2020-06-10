import * as _ from 'lodash';

// simply copying arrays (in the case of mutation)
const arrcpy = arr => [...arr];
// I forgot about the slice method at first, this also works:
// const arrcpy = arr => arr.slice();

const arr1 = [2, 6, 2, 4, 5, -2, 9, 0];
const arr2 = [true, false, -1, undefined, '', null];
const arr3 = [[2, 4, [5, [[[6]]]], 3], [2]];
const arr4 = [1, 2, 3, 3, 3, 4, 5, 5];
const arr5 = [[2, 4], [3, 6], [5, 2], [4, 8]];
const arr6 = [['a', 2], ['b', 4]];

console.log('chunk',
    _.chunk(arr1));

console.log('compact',
    _.compact(arr1),
    _.compact(arr2));

console.log('concat',
    _.concat(arr1, [2], 3, [5, [6]]));

console.log('difference',
    _.difference(arr1, [2, 4]));

// like difference, but accepts function to map the argument arrays before they're compared
console.log('differenceBy',
    _.differenceBy([2.4, 4.3], [4.5, 3], Math.floor),
    _.differenceBy([{x: 5}, {x: 2}], [{x: 5}], e => e.x),
    // shorthand for the above
    _.differenceBy([{x: 5}, {x: 2}], [{x: 5}], 'x'));

// like difference, but accepts a comparator function
console.log('differenceWith',
    _.differenceWith([2.4, 4.3], [3.9, 3], (a, b) => Math.round(a)==Math.round(b)));

console.log('drop',
    _.drop(arr1, 5));

console.log('dropRight',
    _.dropRight(arr1, 5));

console.log('dropRightWhile',
    _.dropRightWhile(arr1, e => e>=0));

console.log('dropWhile',
    _.dropWhile(arr1, e => e>0));

// note: this mutates the array, so copies are made
console.log('fill',
    _.fill(arrcpy(arr1), 5),
    _.fill(arrcpy(arr1), Infinity, 2, 4));

console.log('findIndex',
    _.findIndex(arr1, e => e==2));

console.log('findLastIndex',
    _.findLastIndex(arr1, e => e==2));

console.log('flatten',
    _.flatten(arr3));

console.log('flattenDeep',
    _.flattenDeep(arr3));

console.log('flattenDepth',
    _.flattenDepth(arr3, 1),
    _.flattenDepth(arr3, 2),
    _.flattenDepth(arr3, 3),
    _.flattenDepth(arr3, 4),
    _.flattenDepth(arr3, 5));

console.log('fromPairs',
    _.fromPairs(arr6));

console.log('head',
    _.head(arr1));

console.log('indexOf',
    _.indexOf(arr1, -2));

console.log('initial',
    _.initial(arr1));

console.log('intersection',
    _.intersection(arr1, [2, 4, 5, 6, 7, 8]));
// intersection to intersectionBy, intersectionWith analogous to difference functions

console.log('join',
    _.join(arr1, '___'));

console.log('last',
    _.last(arr1));

console.log('lastIndexOf',
    _.lastIndexOf(arr1, 5));

console.log('nth',
    _.nth(arr1, 5));

// mutates the array
console.log('pull',
    _.pull(arrcpy(arr1), 2, 5));

// like pull, but accepts array of values
console.log('pullAll',
    _.pullAll(arrcpy(arr1), [2, 5]));
// also pullAllBy, pullAllWith

console.log('pullAt',
    _.pullAt(arrcpy(arr1), [2, 5]));

// like pull, but with predicate
// like filter, but mutates the array
// note that this returns the removed elements
console.log('remove',
    _.remove(arrcpy(arr1), e => e < 4));

// mutates the array
console.log('reverse',
    _.reverse(arrcpy(arr1)));

console.log('slice',
    _.slice(arr1, 2, 5));

console.log('sortedIndex',
    _.sortedIndex(arr4, 3));
// also sortedIndexBy

// like indexOf() but on a sorted array (uses binary search)
console.log('sortedIndexOf',
    _.sortedIndexOf(arr4, 3));
// interestingly, there is no sortedIndexOfBy, but you can utilize sortedIndexBy to achieve this

// also sortedLastIndex, sortedLastIndexBy, sortedLastIndexOf

console.log('sortedUniq',
    _.sortedUniq(arr4));
// also sortedUniqBy

console.log('tail',
    _.tail(arr1));

// complement (?) of drop
console.log('take',
    _.take(arr1, 5));
// also takeRight, takeRightWhile, takeWhile

// see also: intersection
console.log('union',
    _.union(arr1, arr2));
// also unionBy, unionWith

console.log('uniq',
    _.uniq(arr1));
// also uniqBy, uniqWith
// see also: sortUniq

// inverse of zip
console.log('unzip',
    _.unzip(arr5),
    _.unzip(_.unzip(arr5)));
// a geometric way to understand this (I believe) is that this transposes the (two-dimensional) array,
// so it's cyclical with cycle length 2

// like unzip, can specify a function to combine the "columns" of the zipped array
// this doesn't have to be invertible, like in the case below
console.log('unzipWith',
    _.unzipWith(arr5, _.add));

// non-mutating form of pull
console.log('without',
    _.without(arr1, 2, 5),
    _.without(arr1, ...[2, 5]));
// doesn't come with a withoutWith, so have to spread manually like in the example shown

// also known as symmetric difference
// (or the typical (arr1^~arr2)v(~arr1^arr2)
// another interesting way to think about XOR is the part of the union that is not in the intersection,
// i.e., difference(union(arr1, arr2), intersection(arr1, arr2))
console.log('xor',
    _.xor(arr1, [2, 4, 13]),
    _.union(_.difference(arr1, [2, 4, 13]), _.difference([2, 4, 13], arr1)),
    _.difference(_.union(arr1, [2, 4, 13]), _.intersection(arr1, [2, 4, 13])));
// also xorBy, xorWith

// inverse (kind of?) of unzip, very similar to python implementation
console.log('zip',
    _.zip(...arr5));

// like fromPairs, but it accepts the values in two arrays
console.log('zipObject',
    _.zipObject(_.unzip(arr6)[0], _.unzip(arr6)[1]));
// this demonstrates (uselessly) how to use zipObject on the same input as fromPairs (to produce the same output)
// also zipWith
// also zipObjectDeep, which supports propert paths
