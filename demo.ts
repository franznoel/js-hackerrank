
let arr1 = [1,2,3,4]
let arr2 = [1,6,1,2]

function checkSimilarity(arr1, arr2) {
  return arr1.some((n) => arr2.includes(n))
}

console.log(checkSimilarity(arr1, arr2))

