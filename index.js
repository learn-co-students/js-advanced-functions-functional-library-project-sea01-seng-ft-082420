const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(passedObj, callback) {
      const keys = Object.keys(passedObj);
      keys.forEach(key => callback(passedObj[key]));
      return passedObj;
    },

    map: function(passedObj, callback) {
      const keys = Object.keys(passedObj);
      let newArray = [];
      keys.forEach(key => newArray.push(callback(passedObj[key])));
      return newArray;
      // return keys.map(key => callback(passedObj[key]));
    },

    reduce: function(passedObj, callback, initialValue) {
      const keys = Object.keys(passedObj);
      let sum;
      if (!initialValue){
        sum = passedObj[0];
        keys.shift();
      } else {
        sum = initialValue;
      }
      keys.forEach(key => sum = callback(sum, passedObj[key], passedObj));
      return sum;
    },

    find: function(passedObj, predicate) {
      const keys = Object.keys(passedObj);
      for (const key of keys){
        if (predicate(passedObj[key])){
          return passedObj[key];
        }
      }
    },

    filter: function(passedObj, predicate){
      const keys = Object.keys(passedObj);
      const filteredArray = [];
      for (const key of keys){
        if (predicate(passedObj[key])){
          filteredArray.push(passedObj[key]);
        }
      }
      return filteredArray;
    },

    size: function(passedObj){
      const keys = Object.keys(passedObj);
      return keys.length;
    },

    first: function(passedObj, num){
      if (!num){
        return passedObj[0]
      } else {
        return passedObj.slice(0, num);
      }
    },

    last: function(passedObj, num){
      if (!num){
        return passedObj[passedObj.length - 1]
      } else {
        return passedObj.slice(-num);
      }
    },

    compact: function(passedObj){
      const newArray = []
      for (const element of passedObj){
        if (element){
          newArray.push(element);
        }
      }
      return newArray;
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
