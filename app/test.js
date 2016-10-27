import chai from 'chai';
import sinonChai from 'sinon-chai';
import chaiImmutable from 'chai-immutable';

chai.use(chaiImmutable);
chai.use(sinonChai);

global.expect = chai.expect;


function storageMock() {
  var storage = {};

  return {
    setItem: function(key, value) {
      storage[key] = value || '';
    },
    getItem: function(key) {
      return storage[key] || null;
    },
    removeItem: function(key) {
      delete storage[key];
    },
    get length() {
      return Object.keys(storage).length;
    },
    key: function(i) {
      var keys = Object.keys(storage);
      return keys[i] || null;
    }
  };
}

global.sessionStorage  = storageMock();
global.localStorage = storageMock();
