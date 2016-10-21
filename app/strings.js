exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {

  },

  wordWrap: function(str, cols) {
    var newstr = str.replace(/ /i, '\n');
  },

  reverseString: function(str) {
    let newstr = [];
    for (let i = str.length -1; i >= 0; i--) {
      newstr.push(str[i]);
    }
    return newstr.join('');
  }
};
