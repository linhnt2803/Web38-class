const { sum } = require('../utils')
const chai = require('chai')
const expect = chai.expect

describe('Sum testing:', () => {
  it('Sum success: ', () => {
    let result = sum(1, 1)
    expect(result).equal(2, 'Sum 1 + 1 must be equal 2!')
  })
})