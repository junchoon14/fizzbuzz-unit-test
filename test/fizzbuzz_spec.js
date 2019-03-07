const should = chai.should()

describe('Test fizzBuzz function', function () {
  it('should return Fizz when number is a multiple of 3', function () {
    const testNum = 12
    let result = fizzBuzz(testNum)
    let results = 'Fizz'
    result.should.be.equal(results)
  })
  it('should return Buzz when number is a multiple of 5', function () {
    const testNum = 125
    let result = fizzBuzz(testNum)
    let results = 'Buzz'
    result.should.be.equal(results)
  })
  it('should return FizzBuzz when number is a multiple of 3 and 5', function () {
    const testNum = 45
    let result = fizzBuzz(testNum)
    let results = 'FizzBuzz'
    result.should.be.equal(results)
  })
  it('should return input number when number is not a multiple of 3 and 5', function () {
    const testNum = 124
    let result = fizzBuzz(testNum)
    let results = 124
    result.should.be.equal(results)
  })
})