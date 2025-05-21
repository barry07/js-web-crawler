// import test function
const {normalizeURL} = require('./crawl.js')

// import functions from Jest

const {test, expect} = require('@jest/globals')

// test

test('normalizeURL', () => {
    const input = ''
    const actual = normalizeURL(input)
    const expected = ''

    expect(actual).toEqual(expected)
})

