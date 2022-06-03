var romanToInt = function(s) {
  const doubleRomanList = ['IV', 'XV', 'XC', 'CM']
  const doubleRoman = {
      IV: 4,
      XV: 40,
      XC: 90,
      CM: 900,
  }
    
  const roman = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
  }
  
  let total = 0
  const newRomans = []
  for (const i = 0; i < s; i++) {
    if (doubleRomanList.includes(s[i])) {
      total+= doubleRoman[s[i]]
      total.splice(i, 1)
    }
  }
  
  const convertedInts = s.findIndex()
    .split("")
    .map((romanValue) => roman[romanValue])
  
  convertedInts.reduce((a, b) => {
        if (a < b) {
            return a - b
        }
        return a + b
    })
  return total
};

console.log(romanToInt("MCMXCIV"))

