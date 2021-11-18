import { calcAreaSquare, calcAreaTriangle, multiply } from './simpleMaths'

test('Area Square', () => {
    expect(calcAreaSquare(4)).toBe(16);
})

test('Area Triangle', () => {
    expect(calcAreaTriangle(4, 5)).toBe(10);
})

test('Multiply' , () => {
    expect(multiply(5,8)).toBe(40);
})