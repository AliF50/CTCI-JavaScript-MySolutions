// Implement an algorithm to determine if a string has all unique characters. What if you
// cannot use additional data structures?


function isUnique(str){ //space of O(n, time of O(n)
  var characterObj = {}; //n
  for(var i = 0; i < str.length; i++){ //n
    if(characterObj[str[i]]){
      return false;
    }else{
      characterObj[str[i]] = 1;
    }
  }
  return true;
}


function isUnique(str){ //no additional space allowed, space of 1, time of O(nlog(n))
  str = str.sort(); //nlog(n)
  for(var i = 0; i < str.length - 1; i++){ //O(n)
    if(str[i] === str[i + 1]){
      return false;
    }
  }
  return true;
}
