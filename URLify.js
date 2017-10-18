//Write a method to replace all spaces in a string with '%20: You may assume that the string
// has sufficient space at the end to hold the additional characters, and that you are given the "true"
// length of the string.

function URLify(str){ //space complexity is O(1), time is O(n)
  if(!str || str.length === 0){
    return false;
  }
  var resultingString = '';
  str = str.trim(); //remove the white spaces from the beginning and end of the string
  for(var i = 0; i < str.length; i++){ //O(n)
    if(str[i] === ' '){
      resultingString += '%20';
    }else{
      resultingString += str[i];
    }
  } //replace all spaces with %20;
  return resultingString;
}


console.log(URLify('   hello world we are the best   '));
console.log(URLify('Mr John Smith      '));
