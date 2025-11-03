const { Sum, MinMax, CalculateAverage } = require('../src/numberProcessor');

describe('Sum', () => {
    test('Should find the sum of numbers in a file', () => {
        result = Sum('./data/sample-numbers.txt', 'utf8');
        expect(result).toBe(2597);
    });
});

describe('MinMax', () => {
    test('Should find the min and max of the set and return them in an array', () => {
        result = MinMax('./data/sample-numbers.txt');
        expect(result).toStrictEqual([ 73, 96 ]);
    });
});

describe('CalculateAverage', () => {
    test('Should calculate the average of all the numbers', () => {
        result = CalculateAverage('./data/sample-numbers.txt');
        expect(result).toBe(86.5 + ((2/3)/10));
    });
});