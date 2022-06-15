// 1. How to de-dupe from an array of objects: [{ a: 1}, { a: 1}]
function deduper(arr1) {
  const deduped = arr1.filter((theObject, index, self) => {
    return index === self.findIndex((o) => o.a === theObject.a)
  })
  return deduped
}
console.log(deduper([{ a: 1}, { a: 1}]))

// 2. From a string, replace some parts of it. ex: ABC0AXYZ0LMNK0FFGG
function replaceZeroes(str) {
  return str.split('').map((letter) => {
    if (letter === '0') {
      return '_'
    }
    return letter
  }).join('')
}

console.log(replaceZeroes('ABC0AXYZ0LMNK0FFGG'))
// 3. Write a function that takes an array: [{ value: 1, label: 'One'}, { value: 2, label: 'Two'}, { value: 'a', label: 'A'}, { value: 3, label: 'Three'}] and returns an object that filters out all values that are not numbers: { 1: 'One', 2: 'Two', 3: 'Three' }

function returnNumbers(arr1) {
  let newObject = {}
  arr1.forEach((theObject) => {
    if (typeof theObject.value !== 'string') {
      newObject[theObject.value] = theObject.label
    }
  })
  return newObject
}

console.log(returnNumbers([{ value: 1, label: 'One'}, { value: 2, label: 'Two'}, { value: 'a', label: 'A'}, { value: 3, label: 'Three'}]))

// 4. Say you have an array of 105 items that you need to save to DB. To save the items, you will call "saveToDB" function. saveToDB can only save 25 items at a time. Write a function that saves all items in the array.
function saveToDB(data) {
  for (let i = 0; i < data.length; i+=25) {
    console.log('Saved')
  }
}
console.log(saveToDB(new Array(176).fill('Something')))

// 5. Write a react component and css that creates a two column layout with a header called "My Component". The layout should be a maximum of 1200px wide. In the left column, there should be three navigation elements: Link 1, Link 2, Link 3. In the right column, there should be a form with a submit button and two fields: Name input and "I agree" checkbox. When the fields are complete and the button has been clicked, text below the form should say "Thank you, <name>!"

function Component() {
  const [name, setName] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const inputNameHandler = (e) => {
    setName(e.target.value)
  }

  const submitHandler = () => {
    if (name !== '' && name.length > 2) {
      setIsSubmitted(true)    
    }
  }
  
  return (
    <div style={{ width: '1200px'}}>
      <ul syle={{ width: '40%'}}>
        <li><a href="/link1">Link 1</a></li>
        <li><a href="/link2">Link 2</a></li>
        <li><a href="/link3">Link 3</a></li>
      </ul>
      <div style={{ width: '60%'}}>
        {isSubmitted ? (
          <div>
            <p>Thank you, ${name}</p>
          </div>
        ) : (
          <form onSubmit={() => submitHandler}>
            <input type="text" value={name} onChang={inputNameHandler}
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    </div>
  )
}