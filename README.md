# Project Name: 
    DevStack

## Description:
    DevStack is a developer learning project where users can explore verious technologies. They can learn and choose their favorite stacks. It's under development process. Many more features will be added further.

## Technology Use:
    VITE / REACT / TAILWIND / REACT-TOASTIFY / DAISYUI / JSON / TS / JS / CSS / HTML

## 3 Features About The Project
    1. Users can create a list of their favorite technology stacks and see the total count.
    2. Users cannot add the same technology stack multiple times. A warning message is displayed when they try to add a duplicate stack.
    3. Users can remove selected stacks individually or remove all stacks at once.


## React Q&A

#### i. What is JSX, and why is it used in React?
Ans: JSX is a programming language with the similarity with html. We can use JS expression directly.

#### ii. What is the difference between props and state?
Ans: Props is like perameter, state is manage any event change in react.

#### iii. What does the useState hook do, and where did you use it in this project?
Ans: useState hook does state management of a project. I used this to manage selected and available stacks on my Technologies feature.

#### iv. What does the useEffect hook do, and why did you need it to load the JSON data?

Ans: useEffect hook help to handle side effect in a React component. Whenever component render and update state with fetched data, useEffect will use to manage the API call.

#### v. Why does every item in a .map() list need a unique key prop?
Ans: React tracks each item with unique key.

#### vi. What is conditional rendering? Show one place you used it
Ans: React components or elements render based on condition. We used it in "Add to stack" button.

#### vii. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Ans: Using props I pass data from a parent component to a child component. In React we can't send data directly child to parent.
