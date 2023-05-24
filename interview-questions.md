# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer: A parameter is the variable declared at the beginning of a function.  An argument is the actual value used in the function.

Researched answer: 
A parameter is a variable declared in the function definition, while an argument is the actual value passed to the function when it is called. Parameters define what kind of values a function expects, while arguments are the specific values provided to fulfill those expectations when invoking the function.

2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer: The .map method takes in an array. I honestly don't know off the top of my head. I take notes though which usually help me. I am going to have to research this to answer it.

Researched answer: 
The .map() method in JavaScript takes a predefined callback function as its parameter. This callback function is the only required parameter for .map(). It is invoked for each element in the array and accepts three arguments: currentValue, index, and array. The currentValue parameter is mandatory and represents the current element being processed. The index parameter is optional and denotes the index of the current element being processed. The array parameter is also optional and refers to the array on which .map() was called. The callback function defines the transformation logic for each element and returns a new value, which will be used as the corresponding element in the new mapped array. 

3. What is the difference between map and filter?

Your answer: Map is a high order function that iterates over an array and returns that same array unless changed, which is where filter comes in to play. You can use filter to do just that, to filter an array to return an array with only the values or strings you filtered out of it.

Researched answer: 
The map() and filter() methods are both higher-order functions available in JavaScript for working with arrays. The map() method is used to transform each element of an array by applying a provided callback function, resulting in a new array of the same length. It doesn't modify the original array. The filter() method creates a new array containing only the elements from the original array that satisfy a specific condition, determined by a callback function. It returns a new array with potentially fewer elements than the original. In essence, map() is used for transformation, while filter() is used for selection based on a condition.

1. What is iteration?

Your answer: Iteration means how many times something is ran, a for loop can iterate multiple times and will stop when a certain condition is met. 

Researched answer: 
Iteration refers to the process of repetitively executing a block of code or performing a set of operations multiple times. It is a fundamental concept in programming that allows us to systematically process a collection of elements or perform actions until a certain condition is met. In the context of arrays or other iterable data structures, iteration typically involves visiting each element one by one and performing specific actions or operations on them. Iteration can be achieved using loops, such as for or while loops, or through higher-order functions like forEach(), map(), or filter(). Iteration allows us to efficiently process and manipulate data, iterate over sequences, perform calculations, and implement various algorithms in a controlled and repeatable manner.

1. What is the difference between a function and a method?

Your answer: A function is a block of code that will do a specific task.  A method is is a block of code that has a function but also a class. I can't remember more but I know there's more to it. 

Researched answer:
A function is a standalone block of code that performs a specific task and can be called independently. It is defined outside of any object or class and can accept arguments, perform operations, and return a value. A method is a function that is associated with a specific object or class. It is defined within the context of a class and operates on the data and behavior of that class. Methods are invoked on instances or objects of the class and can access and modify the object's internal state. So functions are standalone code units, while methods are functions tied to specific objects or classes.

6. STRETCH: What is hoisting in JavaScript?

Your answer: I honestly have no idea, I will have to research this.

Researched answer: Hoisting is a term used in JavaScript to describe the behavior of variable and function declarations being moved to the top of their containing scope during the compilation phase, before the code is executed. This means that regardless of where variables and functions are declared within their scope, they are conceptually moved to the top.



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Component: 
In software development, a component is a self-contained and reusable module or building block that encapsulates specific functionality and/or user interface elements. Components are used to modularize and organize the codebase, promoting code reusability, maintainability, and scalability. In the context of front-end development, components are commonly used in frameworks like React, Angular, or Vue.js to create reusable UI elements that can be composed together to build complex user interfaces.

2. Spread operator:
The spread operator, denoted by the ellipsis (...), is a syntax feature introduced in JavaScript that allows the expansion of iterable objects into individual elements. It can be used in various contexts, such as arrays, objects, or function calls. When used with arrays, the spread operator can be used to create a new array by combining the elements of one or more existing arrays. With objects, it can be used to create a new object by merging the properties of multiple objects. In function calls, it can be used to pass an array as separate arguments to a function.

3. React state:
In React, state refers to an internal data storage mechanism that allows components to store and manage their own data. State represents the dynamic and mutable aspects of a component that can change over time due to user interactions, network responses, or other factors. State allows components to update and re-render based on these changes, ensuring the UI remains in sync with the underlying data. In React, state is typically managed within class components using the this.state object, while functional components can utilize the useState hook to handle state.

4. React props:
Props (short for properties) in React are a mechanism for passing data from a parent component to its child components. Props are read-only and provide a way to configure and customize child components based on the parent's data or behavior. They allow for the flow of data from top to bottom in a component hierarchy. Props are passed as attributes to child components in JSX syntax and can be accessed within the child component using the props object. Props are essential for creating reusable and flexible components in React.

5. DOM events:
DOM events are actions or occurrences that happen in the Document Object Model (DOM) of a web page. They represent interactions or changes in the web page that trigger specific behaviors or actions. Examples of DOM events include mouse clicks, keyboard input, form submissions, scroll actions, and many others. In JavaScript, event handlers can be attached to DOM elements to listen for and respond to these events. When an event occurs, the associated event handler function is executed, allowing developers to perform actions and manipulate the web page in response to user interactions or other events.
