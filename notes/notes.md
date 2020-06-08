Collections include both objects (i.e., non-primitives, which can have properties) and arrays. Arrays can be thought of as a special form of collection, where the key are the whole numbers.

A lot of lodash functions can be substituted with native JS array functions, e.g., `.map`, `.find`, etc., and which typically follow a fluent-API style (e.g., chaining). From online benchmarks (e.g., [this][1]), it seems that native functions are often faster (except for the case of `_.each` vs `_.forEach`).

[1]: https://blog.bitsrc.io/you-dont-need-lodash-or-how-i-started-loving-javascript-functions-3f45791fa6cd
