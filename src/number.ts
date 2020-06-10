import * as _ from 'lodash';

// nothing really exciting from the math functions, so I skipped over them
// but these three methods seem like they could be more useful

console.log('clamp',
    _.clamp(52, 2, 3),
    _.clamp(2.5, 2, 3));

console.log('inRange',
    _.inRange(52, 2, 3),
    _.inRange(2.5, 2, 3));

console.log('random',
    _.random(),     // not same as Math.random(); defaults to an integer because
                    // of integer bounds
    _.random(0, 1, true),       // same as Math.random()
    _.random(5.5, 8.5),         // setting fp bounds auto sets floating to true
    _.random(2, 3));
