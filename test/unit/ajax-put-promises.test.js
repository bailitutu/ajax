;(function (should, expect, Ajax) {
  'use strict'

  describe('#AJAX - Test `put` promises interface', function () {
    var ajax = new Ajax()
    var putRequest = ajax.put()

    it('Should `put` method return `then` method', function () {
      putRequest.should.have.property('then')
    })

    it('Should `put` method return `catch` method', function () {
      putRequest.should.have.property('catch')
    })

    it('DEPRECATED - Should `put` method return `done` method', function () {
      putRequest.should.have.property('done')
    })

    it('DEPRECATED - Should `put` method return `error` method', function () {
      putRequest.should.have.property('error')
    })

    it('Should `put` method return `always` method', function () {
      putRequest.should.have.property('always')
    })
  })
})(window.chai.should(), window.chai.expect, window.Ajax)
