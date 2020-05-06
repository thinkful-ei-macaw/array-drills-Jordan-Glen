// /**
//  * URLify
//  * This is a 0(1);
//  */

// const urlify = (string) => {
//   return string.split(' ').join('%20');
// };
// console.log(urlify('www.thinkful.com%20/tauh%20ida%20parv%20een'));

// /**
//  * Filtering an array 
// This is an 0(n)
//  */

const remove = (arr, num) => {
  const result = [];

  for (let i =0; i < arr.length; i++) {
    if(arr[i] < num) {
      result.push(arr[i]);
    }
  }
  return result;
};
console.log(remove([1, 8, 7,6, 5,4,3,2,1], 5));

/**
 * Max sum
 */