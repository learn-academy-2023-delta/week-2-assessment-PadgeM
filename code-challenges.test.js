// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// Pseudo code:

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

describe("div3" , () => {
  it("takes a object as an argument and decides if the number inside it is evenly divisible by three", () => {
  const object1 = { number: 15 }
  // Expected output: "15 is divisible by three"
  const object2 = { number: 0 }
  // Expected output: "0 is divisible by three"
  const object3 = { number: -7 }
  // Expected output: "-7 is not divisible by three"
  expect(div3(object1)).toEqual("15 is divisible by three")
  expect(div3(object2)).toEqual("0 is divisible by three")
  expect(div3(object3)).toEqual("-7 is not divisible by three")
  })
})

// b) Create the function that makes the test pass.
const div3 = (obj) => {
  const number = obj.number
  if (number % 3 === 0) {
    return `${number} is divisible by three`
  } else {
    return `${number} is not divisible by three`
  }
}


// Pseudo code: 
// I need a function called "div3" that takes an object (obj) as input
// I need to take a number from the object and assign it a variable called number
// I need to make a function that checks if the number is divisible by three.
// If the condition is true then return (Number) is divisible by three
// otherwise it returns a string saying (Number) is not divisible by three

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

describe("capWords" ,() => {
  it("an array of words and returns an array with all the words capitalized", () => {
    const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
    // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
    const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
    // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]
  expect(capWords(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
  expect(capWords(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
  })
})

// b) Create the function that makes the test pass.

const capWords = (words) => {
  return words.map(word => word[0].toUpperCase() + word.slice(1))
}


// Pseudo code: 
// I need a function called capWords that will take in words
// have a return statement that maps the array
// use .toUpperCase method to change each beginning letter using slice and the first index

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

describe("vowelFirst" ,() => {
  it("takes in a string and logs the index of the first vowel", () => {
    const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2
  expect(vowelFirst(vowelTester1)).toEqual([1])
  expect(vowelFirst(vowelTester2)).toEqual([0])
  expect(vowelFirst(vowelTester3)).toEqual([2])
  })
})

// b) Create the function that makes the test pass.
const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

function vowelFirst(string) {
  const vowels = "aeiouAEIOU"
  const firstVowelIndex = Array.from(string).findIndex(char => vowels.includes(char))
  return [firstVowelIndex]
}

const firstVowelIndex = vowelFirst(vowelTester1)
console.log("The index of the first vowel is:", firstVowelIndex)

const firstVowelIndex2 = vowelFirst(vowelTester2)
console.log("The index of the first vowel is:", firstVowelIndex2)

const firstVowelIndex3 = vowelFirst(vowelTester3)
console.log("The index of the first vowel is:", firstVowelIndex3)

// Pseudo code:
// Make a function called vowelFirst that takes a string as an input
// create a variable called vowels that will contain all the vowel characters
// Now I have to convert all the vowel characters into an array of characters using array.from function
// I have to usee the findindex method on the array to find the index of the first character that is included in the vowel string
// Return an array containing the index of the first vowel found in the input string. Wrap the index in the square brackets to create an array.
// (I honestly got stuck on this and had to research a lot of it. Even though I got it done, I still don't fully understand how I made this work)