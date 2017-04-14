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
