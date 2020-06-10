import * as _ from 'lodash';

// assign: we've already seen this a few times, makes sense
// assignIn (extend): also add own and inherited properties (i.e., from prototypes)
// also assignInWith (extendWith), assignWith
// also defaults, which only assigns if not there already, and defaultsDeep
// also merge (and mergeWith), which is like a deep assign: if a property is an object on both source
//      and destination, then it will try to recursively merge those

console.log('at',
    _.at({a: 'hello', b: { c: 'test', d: [42, undefined, Infinity ]}},
        ['a', 'b.c', 'b.d.length', 'b.d[2]']
        ));

// create creates an object with the given prototype

// findKey returns the key of the element that the predicate returns true for
// also findLastKey

// forIn loops over the keys (a.o.t. forEach, forOwn), and can end by returning false
// forOwn (use this for objects instead of forEach) loops over the values,
//      and can end by returning false
// also forInRight, forOwnRight

// functions returns the keys of enumerable functions in an object,
// functionsIn the same but also for nonenumerable keys
console.log('functions',
    _.functions({a: b => b, c: _.constant(4), b: 'hi'}));

console.log('get',
    _.get({a: { b: [ 2, { c: -5 }, 5 ] } }, 'a.b[1].c', 'default'),
    _.get({a: { b: [ 2, { c: -5 }, 5 ] } }, 'a.b[3].c', 'default'));
// also result, which is similar but automatically invokes the function if it resolves to a function
// also set, setWith, unset, update, updateWith

console.log('has',
    _.has({a: { b: [ 2, { c: -5 }, 5 ] } }, 'a.b[1].c'),
    _.has({a: { b: [ 2, { c: -5 }, 5 ] } }, 'a.b[3].c'));
// also hasIn

console.log('invert (and toArray)',
    _.toArray(_.invert({'world': 1, 'hello': 0})));
// also invertBy

console.log('invoke',
    _.invoke({a: { b: [ 2, {
            c: (...args) => _.join(args, '----')
            }, 5 ] } }, 'a.b[1].c', 'hello', 'world'));

// keys, keysIn, values, valuesIn should be self explanatory

// mapKeys, mapValues to map keys, values, should be self-explanatory

// omit, omitBy, pick, pickBy: only keep certain properties of an element,
// similar to filter and reject but with keys

// toPairs (entries) is the inverse of fromPairs: from object to array of key-value (length 2) arrays
// also toPairsIn (entriesIn)

// transform is like reduce, but the accumulator will be an object or an array, and you don't have
// to return the value of accumulator in the iteratee (you can just mutate the accumulator object)
// you can also cancel early by returning false
