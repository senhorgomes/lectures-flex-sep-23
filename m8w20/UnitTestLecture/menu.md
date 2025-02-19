### To Do
- [ ] Tools for testing React
- [ ] Add Features/Tests to our App -> TDD - Test driven development
- [ ] `debug()` and `prettyDOM()`
- [ ] Mocking AJAX Requests and Functions
- [ ] Coverage Reports

<!-- Tested code is good code! -->

The general opinion about testing is that it isn't great, it is not worth

Edge cases

- Happy case
    -> Best outcome of this function/app
- Sad cases
    -> What will make this break


Why some companies don't do TDD/testing
 - Budget
    - Time/Developers/Resources
In the short run this is great
In the long you may run into more issues

You can a whole career around JUST making tests

# Unit Test -> It will only affect one file
- Create a way for the AI to make a selection
# Integration Test -> Clicking on the robot head will toggle the cheating boolean. It affects the AI selection
- Create a way for the AI to Cheat
# Mock -> Test fetching highscores (mock axios)
- Create a way for us to retrieve highscore

- What does testing help us with?
    - Know if something is working given specific inputs
    - Ensure functionality works as expected

- TODO list
 - Created a function that allows the AI to make a selection
 <!-- Integration testing -->
 - Create a cheat mode for the AI
    - We can click on the AI icon, and activate a cheat mode for it
    - It'll always select the winning choice