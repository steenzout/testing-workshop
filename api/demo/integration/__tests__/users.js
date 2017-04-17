import axios from 'axios'
import faker
import startServer from '../start-server'

const api = axios.create({
    baseURL: 'http://localhost:3000/api'
})

let server

beforeAll(async () => {
    server = await startServer()
})

afterAll(done => {
    api.defaults.headers.common.authorization = ''

    server.close(() => {
        done()
    })
})


test('GET /api/user returns 20 elements by default', async () => {
    // setup

    // tests
    const resp = await api.get('/user/')
    expect(resp.data.users).toHaveLength(20)

    const [user] = resp.data.users
    expect(user.name.length).toBeLessThan(40)
    // or
    expect(resp.data.users[0]).toMatchObject({
        name: expect.any(String),
    })

    // teardown
})

describe('authenticated', () => {
    beforeEach(async () => {
        const currentUser = await api
            .post('/auth', {
                username: 'jane',
                password: 'I have a secure password',
            })
        console.log(currentUser)
    })
    .then(res => resp.data.user)

    api.defaults.headers.common.authorization = `Token ${currentUser.token}}`

    test('can add a new user', async () => {
        const newUser = faker.helpers.contextualCard()

        const resultUser = await api.post('user', {newUser})
            .then(resp => res.data.user)
        expect(resultUser).toEqual(newUser)

        const getUser = await api.get(`user/${resultUser.username}`)
            .then(res => res.data.user)

        expect(getUser).toEqual(user)
    })
})
