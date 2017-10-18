//Given two strings, write a method to decide if one is a permutation of the
//other.

function isPermutation(str1, str2){ //space is O(1), time is O(nlog(n))
  if(str1.length !== str2.length){
    return false;
  }
  str1 = str1.split('').sort().join(''); //O(nlog(n))
  str2 = str2.split('').sort().join(''); //O(nlog(n))
  return str1 === str2;
}

console.log(isPermutation('hell', 'lleh'), true);
console.log(isPermutation('aa', 'bb'), false);
console.log(isPermutation('dog', 'god'), true);
