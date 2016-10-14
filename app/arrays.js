exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    
  },

  sum: function(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
      sum += arr[i]
    }
    return sum;
  },

  remove: function(arr, item) {
    let newarr = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== item) {
        newarr.push(arr[i]);
      }
    }

    return newarr;
  },

  removeWithoutCopy: function(arr, item) {
    // for (let i = 0; i < arr.length; i++) {
    //   if (arr[i] === item) {
    //     arr.splice(i, 1);
    //   }
    //   console.log(arr);
    //   console.log(arr[i]);
    // }
    //
    // return arr;
  },

  append: function(arr, item) {
    arr.push(item);

    return arr;
  },

  truncate: function(arr) {
    arr.pop();

    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);

    return arr;
  },

  curtail: function(arr) {
    arr.shift();

    return arr;
  },

  concat: function(arr1, arr2) {
    let newarr = [];

    arr1.forEach(function(index) {
      newarr.push(index);
    });

    arr2.forEach(function(index) {
      newarr.push(index);
    });

    return newarr;
  },

  insert: function(arr, item, index) {

  },

  count: function(arr, item) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        count ++;
      }
    }

    return count;
  },

  duplicates: function(arr) {

  },

  square: function(arr) {
    let newarr = arr.map(function(i) {
      return i * i;
    })

    return newarr;
  },

  findAllOccurrences: function(arr, target) {
    occurrences = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        occurrences.push(i);
      }
    }

    return occurrences;
  }
};
