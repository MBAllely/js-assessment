exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    fn = function() {
      return obj.greeting + ', ' + obj.name + '!';
    }
    return fn(obj)
  },

  alterObjects: function(constructor, greeting) {

  },

  iterate: function(obj) {
    console.log(obj);
  }
};
