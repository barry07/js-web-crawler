// import test function
const {normalizeURL} = require('./crawl.js')

// import functions from Jest

const {test, expect} = require('@jest/globals')

// test



test('normalizeURL strip https protocol', () => {
    const input = 'https://blog.boot.dev/path'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev/path'

    expect(actual).toEqual(expected)
})

test('normalizeURL strip http protocol', () => {
    const input = 'http://blog.boot.dev/path'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev/path'

    expect(actual).toEqual(expected)
})

test('normalizeURL strip trailing slash', () => {
    const input = 'https://blog.boot.dev/path/'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev/path'

    expect(actual).toEqual(expected)
})

test('normalizeURL strip capital letters', () => {
    const input = 'https://BLOG.boot.dev/path'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev/path'

    expect(actual).toEqual(expected)
})

