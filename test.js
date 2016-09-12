var expect = require('chai').expect
  , tdraw = require('./')

describe('tdraw', function() {
  
  it('should return element', function() {
    var el = {}
    expect(tdraw(el)).to.be.eql(el)
  })

  it('should add and invoke draw function', function() {
    var el = { state: { foo: 'bar' } }
      , fn = function(n, d){ result = [n, d] }
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

  it('should default state if not set', function() {
    expect(tdraw({}, String).state).to.be.eql({})
  })

  it('should accept raw node or once selection', function() {
    var el = {}
      , o = { node: function(){ return el } }
    
    expect(tdraw(o, String)).to.be.eql(o)
    expect(tdraw(o.node(), String)).to.be.eql(el)
  })
})