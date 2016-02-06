var expect = require('chai').expect
  , tdraw = require('./')

describe('tdraw', function() {
  
  it('should return element', function() {
    var el = {}
    expect(tdraw(el)).to.be.eql(el)
  })

  it('should add and invoke draw function', function() {
    var el = { state: { foo: 'bar' } }
      , fn = function(d){ result = [this, d] }
      , result

    expect(tdraw(el, fn).draw).to.be.a('function')
    expect(result[0]).to.eql(el)
    expect(result[1]).to.eql(el.state)
  })

  it('should set initial state', function() {
    var el = {}
      , state = { foo: 'bar' }

    expect(tdraw(el, String, state).state).to.be.eql(state)
  })

})