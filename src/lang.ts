import * as _ from 'lodash';

// castArray casts nonArray types to arrays (i.e., by wrapping), identity for arrays

// clone does what you'd expect (shallow clone)
// also cloneDeep
// also cloneWith, cloneDeepWith

// _.conformsTo
// takes in an object of property predicates, like a runtime check
// using example from documentation, as it is very clear
console.log('conformsTo');
interface ConformObject {
    a: number;
    b: number;
}
const objects: ConformObject[] = [
    {'a': 2, 'b': 1},
    {'a': 1, 'b': 2}
];
// same as _.conforms, which is _conformsTo with source partially applied
console.log(
    _.filter(objects, _.conforms({'b': n => n>1}))
);

// _.isArguments checks if an object is likely enumerable
// e.g., checks if it is an object that has a non-enumerable property called callee

// lots of methods to check form:
// isArray, isArrayBuffer, isArrayLike, isArrayLikeObject, isBoolean, isBuffer,
// isDate, isElement, isEmpty, isError, isFinite, isFunction, isInteger, isLength,
// isMap, isNaN, isNil (is null or is undefined), isNull, isNumber, isObject,
// isObjectLike, isPlainObject, isRegExp, isSafeInteger, isSet, isString, isSymbol,
// isTypedArray, isUndefined, isWeakMap, isWeakSet
// also many "toTYPE" functions

// isEqual: deep comparison of two objects
console.log('isEqual',
    _.isEqual({a: {b: 6}}, {a: {b: 6}}));
// also isEqualWith

// isMatch: check if given property values in source are matched in object
console.log('isMatch',
    _.isMatch({a: 1, b: 2}, {b: 2}),
    _.isMatch({a: 1, b: 2}, {b: 1}));
// also isMatchWith
