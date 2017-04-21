// api/demo/unit/__tests__/utils.js

import {sum} from '../utils'

import {makeMeASandwich} from '../utils'

test('returns null when sandwich is not a string', () => {
    const req = {query: {sandwich: false}}
    const result = makeMeASandwich(req)

    expect(result).toBeNull()
})

test('returns null when sandwich is a string', () => {
    const sandwich = 'grilled cheese'

    const req = {query: {sandwich: sandwich}}
    const result = makeMeASandwich(req)

    expect(result).toBe(sandwich)
})

// sum(1, 2, 3, 4, 5)

test('when called with nothing returns 0', () => {
    const result = sum()
    expect(result).toBe(0)
}

// test when called with a single number
test('when called with a single number', () => {
    const result = sum(3)
    expect(result).toBe(3)
}

// test when called with multiple numbers
test(' when called with multiple numbers', () => {
    const result = sum(1, 2, 3, 4)
    expect(result).toBe(10)
}
