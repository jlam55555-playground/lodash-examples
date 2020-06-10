import * as _ from 'lodash';

console.log('after');
const afterFn = _.after(5, () => console.log('done after five times'));
Array.from(Array(7).keys()).forEach((e, i) => {
    console.log(`iteration ${i}`);
    afterFn();
});
// also _.before, which is the opposite of after; it gets called up to (n-1) times

console.log('ary');
const nonArityLimitedFn = (...args) => console.log(`5-ary function called with ${args.length} arguments.`);
const arityLimitedFn = _.ary(nonArityLimitedFn, 5);
nonArityLimitedFn(1, 2, 3);
nonArityLimitedFn(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
arityLimitedFn(1, 2, 3);
arityLimitedFn(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// _.unary is the special case _.ary(fn, 1)

console.log('bind');
const unBoundFn = (greeting, name) => console.log(`${greeting}, ${name}!`);
const boundFn = _.bind(unBoundFn, null, 'Hello', _);
boundFn('world');
// note that (_ === .bindKey.placeholder)
// this is the same as _.partials, but _.partials doesn't allow binding custom this
// note that _.wrap is a special case of _.partials (but note that the order of arguments
//      is switched, with the wrapped value being put before the function in wrap)

console.log('bindKey');
const boundKeyFn = _.bindKey(this, 'futureFn', 'from the future');
// boundKeyFn(); (this won't work, this['futureFn'] isn't defined yet)
this['futureFn'] = boundFn;
boundKeyFn();

// using the example straight from the documentation because it's very illustrative
console.log('curry');
const abc = (a, b, c) => [a, b, c];
const curriedAbc = _.curry(abc);
console.log(
    curriedAbc(1, 2, 3),
    curriedAbc(1, 2)(3),
    curriedAbc(1)(2)(3),
    curriedAbc(1)(_, 3)(2)
);
// also curryRight

// _.debounce (!!!), self-explanatory (happens at most for rapidly repeated events)
// also _.throttle (keeps repeating at regular intervals for rapidly repeated events)
// great for DOM events

// _.defer is similar to setInterval(fn, 0); waits for call stack to clear
// it uses _.delay, which basically calls setTimeout

console.log('flip',
    _.flip((a, b, c) => `ordered arguments: ${a} ${b} ${c}`)(1, 2, 3));
// this can also be performed with _.rearg, which is a more general case of flip

// _.memoize (ooh)

// _.negate (for boolean-valued functions (i.e., predicates)

// _.once (like _.before(2))

console.log('overArgs');
const overArgsFn = _.overArgs((x, y) => [x, y], [x => x*2, x => x**2]);
console.log(overArgsFn(5, 2));

// _.rest is the same as using the rest parameter (...restParameter)
// _.spread is the same as applying a function on an array to be spread through
// its arguments, like Function#apply
