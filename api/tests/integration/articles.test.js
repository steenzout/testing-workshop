// you're going to need to start the server before all the tests
// start and close the server after all the tests are finished.
// startServer is a function that returns a promise which resolves
// to the server object. The server object has a `close` function
// which accepts a callback. Kinda wonky, I know... But you should
// learn how to use both async styles with these tests sooo... :)
// eslint-disable-next-line no-unused-vars
import startServer from '../../src/start-server'
// pulling this in for you. Hint, you'll want it for at least one
// of the tests :)
// eslint-disable-next-line no-unused-vars
import {generateArticleForClient} from '../../../other/generate/article'
// from here you're pretty much on your own.
// Tip: create a ./helpers/api-client where you can have
//   some of the logic for dealing with articles and users
//   (because you'll need to perform basic CRUD and it's
//   nice to avoid that cruft in your tests)
import axios from 'axios'
import faker from 'faker'

const api = axios.create({
    baseURL: 'http://localhost:3000/api'
})

let server

beforeAll(async () => {
    server = await startServer()
})

afterAll(done => {
    server.close(done)
    api.defaults.headers.common.authorization = ''
})

describe('unauthorized', () => {
    test('get with limit', async () => {
        const limit = 5
        const resp = await api.get(`articles?limit=${limit}`)

        expect(resp.data.articles).toHaveLength(limit)
    })

    test('get with offset', async () => {
        // TODO
        expect(false).toBe(true)
    })
})

describe('authorized', () => {

    beforeAll(async () => {
        const user = await generateRandomUser()
        const userAuth = await login(user.token)

        // setup authentication
        api.defaults.headers.common.authorization = `Token ${currentUser.token}`
    })

    afterAll(async () => {
        // TODO delete users
        // remove authentication
        api.defaults.headers.common.authorization = ''
    })

    // tip: you're going to need to create a new user
    //   for these tests and set up the API client to
    //   use that user's token. You can look at the
    //   API client in the client application to see
    //   how this is done: client/src/shared/agent.js

    test('post a new article', async () => {
        const article = generateRandomArticle()
        const postArticle = await api.post('articles', {article})
            .then(r => r.data.article)

        const getArticle = await api.get(`articles/${postArticle.article}`)
            .then(r => r.data.article)

        expect(getArticle).toMatchObject(article)
    })

    test('update an article', async () => {
        // TODO
        expect(false).toBe(true)
    })

    test('delete an article', async () => {
        // TODO
        expect(false).toBe(true)
    })
})

//////// Elaboration & Feedback /////////
/*
 http://ws.kcd.im/?ws=Testing&e=API%20Integration&em=
 */
test('I submitted my elaboration and feedback', () => {
    const submitted = false // change this when you've submitted!
    expect(true).toBe(submitted)
})
////////////////////////////////

async function generateRandomUser(overrides) {
    const password = faker.internet.password()
    const userData = generateUserData(Object.assign({password}, overrides))
    return Object.assign(userData, {password})
}

//////// EXTRA CREDIT ////////

// If you get this far, try adding a few more tests,
// then file a pull request to add them as extra credit!
// Learn more here: http://kcd.im/testing-workshop-contributing
