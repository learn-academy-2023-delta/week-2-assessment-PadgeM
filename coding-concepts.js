// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Delta 2023"
console.log(cohort.split(""))

// a) Your answer: This will split the strings letters into their own individual strings.
// b) Verify and explain: When we use the .split method we effectively split each full word of a string into multiple tiny strings.  If we went further we could use .join to join those strings into one large string.

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: This will be undefined
// b) Verify and explain: We have no return statement so the console won't know what to log. It will always come back undefined until we add that return statement.

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
 console.log(multipliedByTwo)

// a) Your answer: This will log the array times 2
// b) Verify and explain: When we use the .map method we map the whole array and since we have ((number) => number * 2) this will take the array and multiply it by two. When we log this using the function it will come back with that altered array.

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: This will log only the odd numbers
// b) Verify and explain: This will use .filter method to search through each value in the array. We tell it to search for every number that has a remainder. We do this by using the strict inequality operator, using this in tandem with the modulo operator. We now can find all numbers that will be odd and exclude all even numbers from the modified array.

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: This will log JavaScript
// b) Verify and explain: In this we are logging the index of the first string in the key value language. So when we use the brackets [] we are asking it to find the 0 spot in the index which as we know is the first string "JavaScript" since all index start at 0.

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Delta"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
 console.log(learnStudent)

// a) Your answer: This will log George in the new object
// b) Verify and explain: My answer was correct. Though I do not know if I am using the term correctly. I do know though is a new instance of the "Learn" class is created using the "new" keyword and passing "George" as the argument for the "name" parameter. This creates an object called "learnStudent" based on the "Learn" class, and the constructor initializes its properties with the provided values.
