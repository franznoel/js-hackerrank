function findOriginalArray(changed: number[]): number[] {
  const existingMultipliedNumbers: number[] = [];
  const originalNumbers = changed
    // .sort((a, b) => a - b)
    .map((changedNumber: number) => {
      const foundOriginalNumber = changed.find((theNumber) => {
        const multipliedNumber = theNumber * 2;
        console.log('existingMultipliedNumbers', existingMultipliedNumbers, changedNumber, theNumber, multipliedNumber);
        const foundExistingNumber = multipliedNumber === changedNumber && !existingMultipliedNumbers.includes(multipliedNumber)

        if (!existingMultipliedNumbers.includes(multipliedNumber)) {
          existingMultipliedNumbers.push(multipliedNumber);
        }

        return foundExistingNumber;
      });
      return (typeof foundOriginalNumber !== 'undefined') ? foundOriginalNumber : 0;
    })
    .filter((changeNumber) => changeNumber > 0);

  return originalNumbers;
};

const original = findOriginalArray([1,3,4,2,6,8]);
console.log(original)
