// Your task: Write these unit tests :)
// eslint-disable-next-line no-unused-vars
import {getTokenFromHeader} from '../utils'

test('returns null if there is no token', () => {
    const req = {headers: {authorization: 'Token'}}
    const result = getTokenFromHeader(req)

    expect(result).toBeNull()
})

test('returns the token from the headers', () => {
    const token = 'XYZ'

    const req = {headers: {authorization: 'Token '+ token}}
    const result = getTokenFromHeader(req)

    expect(result).toBe(token)
})

// implement arrayify tests

//////// Elaboration & Feedback /////////
/*
http://ws.kcd.im/?ws=Testing&e=API%20Unit&em=
*/
test('I submitted my elaboration and feedback', () => {
    const submitted = true // change this when you've submitted!
    expect(true).toBe(submitted)
})
////////////////////////////////

//////// EXTRA CREDIT ////////

// If you get this far, try adding a few more tests,
// then file a pull request to add them to the extra credit!
// Learn more here: http://kcd.im/asts-workshop-contributing
