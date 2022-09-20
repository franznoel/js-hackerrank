function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const sortedArrays = [...nums1, ...nums2].sort((a,b) => a-b)
  const arrayLength = sortedArrays.length

  console.log('arrayLength', arrayLength)
  if (arrayLength % 2 == 0) {
    const median = arrayLength/2
    console.log('median even', median, sortedArrays, sortedArrays[median], sortedArrays[median-1])
    return (sortedArrays[median] + sortedArrays[median-1]) / 2
  }
  
  const median = Math.floor(arrayLength/2)
  console.log('median odd', median, sortedArrays, sortedArrays[median])
  return sortedArrays[median]
};

// console.log(findMedianSortedArrays([1,3], [2]))
// console.log(findMedianSortedArrays([1,2], [3,4]))
console.log(findMedianSortedArrays([3], [-2,-1]))
