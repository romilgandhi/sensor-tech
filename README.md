## Code Refactored Explanation
- Created two useEffect hooks, one for the intial call when state is empty.Second for the setInterval which calls api every 5 second and cleared interval on unmounting.
- Created seperate result method to invoke api, try to make it loosely copuled to test it independently.
- Crrated seperate method to render status based on temprateure we get it from api call, removed it from render and created render method to test it independently and to make code more readable.

## Unit Test
- Tried to create test on mounting and unmounting of code
- Tried to mock user model and fetch api to test with mocked data on rendering hooks.

## What would you improve next if you had more time?
- I would dig more into learn Jest and Enzyme to learn mocking hooks in react and write test cases for the below scenarios
    - result on Mounting
    - result on UnMounting
    - result on mocking async api
    - result on mocking useEffect hooks

## Questions you would ask and your own answers and assumptions
 - To call fetch api every 5 seconds.
 - If api returns same state every time than to stop unusual rendering of state everytime.
 - to make fetch api lossely coupled by changing url as parameterized.
 
## Explanations of decisions or the approach you took
  - Main focus during refactoring of code is to make methods loosely coupled to make it more TDD friendly.

## ○ Any other notes you feel relevant to evaluate your test improvements.
  - I didn't get much change to write unit test cases for all the scenarios because my half of the time spent in digging into learning jest for react hooks.
  - I would have written more test cases if it would be pure javascript code.
