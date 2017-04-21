// Your task: Write these unit tests :)
// eslint-disable-next-line no-unused-vars
import {arrayify} from '../utils'
import {getTokenFromHeader} from '../utils'

test('returns null if there is no token', () => {
    const req = {headers: {}}
    const result = getTokenFromHeader(req)

    expect(result).toBeNull()
})

test('returns the token from the headers', () => {
    const token = 'XYZ'

    const req = {headers: {authorization: `Token ${token}`}}
    const result = getTokenFromHeader(req)

    expect(result).toBe(token)
})

// implement arrayify tests

test('when arrayify called with nothing it returns an empty array', () => {
    const result = arrayify()
    expect(result).toEqual([])
})

test('when arrayify called with an integer an array with that integer', () => {
    const result = arrayify(3)
    expect(result).toEqual([3])
})

test('when arrayify called with an array it will return that array', () => {
    const result = arrayify([3])
    expect(result).toEqual([3])
})

//////// Elaboration & Feedback /////////
/*
http://ws.kcd.im/?ws=Testing&e=API%20Unit&em=
*/
test('I submitted my elaboration and feedback', () => {
    const submitted = true
    expect(true).toBe(submitted)
})
////////////////////////////////

//////// EXTRA CREDIT ////////

// If you get this far, try adding a few more tests,
// then file a pull request to add them to the extra credit!
// Learn more here: http://kcd.im/asts-workshop-contributing

// TODO add test case: there is no request
// TODO add test case: there is no request.authorization
// TODO added test case: there is no Token header in authorization
// TODO added test case: there is no value for the Token header in authorization
