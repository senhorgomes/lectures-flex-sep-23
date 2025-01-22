# What are the midterms?

- A project you choose from ten (10) available options
- Practice of the full stack:
- Back-end
    - Database
    - PostgreSQL
    - Express
- Front-end
    - HTML
    - CSS
    - JavaScript
    - CSS preprocessor
- Practice working in a team
- Practice planning a web software project
- Practice communicating as a team
- Using git and GitHub as a team
- Practice presenting a project

# What goes into a successful project?

- Planning
- Communication -> Your peers are going to encounter roadblocks as well. Reach out to a mentor, or even a team member and communicate it with them

Whenever your groups are formed
Two weeks for the midterms January 6th - 18th
Presenting on the 18th
You'll have an instructor/mentor with you
Project Manager -> meetings with them, ask them for assistance, they will keep track of your progress

# Planning

- Dive into coding. PLEASE DO NOT DO THAT

For your midterm you will want to spend as much time as possible planning the app before coding it. This is to ensure you have a solid vision of what you want to build. By planning, you are also preventing yourself from backtracking and having to rebuild major components of the app. 
Here are a couple things you should do for planning:

# Listing out the requirements for the app

All in a google doc.

## What are user stories?

In software development and product management, a user story is an informal, natural language description of features of a software system.

- As a user I want to...
- As a user I want to be able to create maps -> GET /newmap POST /newmap
- As a user I want to be able to share maps

- As a user I want to be able to edit my existing maps


## Which Project to Pick?

Which are part of the prototype and which are stretch?

Stretch features are features you implement after you create an MVP

## Prototype(MVP)

MVP, minimal viable product. An app that does the bare minimum and meets the requirements

How many of the user stories, are requirements?

Stretch → Things that we want to work on after the MVP is done.

## ERD 

What tables should exist in this app? What data am I trying to save?

- Entity Relationship Diagram. How the tables are connected together, it will define your database
What information will I need to get the features I want?
Tables, FK, PK

If you need users, you can setup fake users by inserting them into your tables/database

## Routes

You will not need to create a register page or a login page.
You can hardcode your login users.

/login/:id
 -> /login/2
 -> A cookie with the id of 2 will be stored

- CRUD
Orders
- Create -> /order POST
- Read -> /orders or a single order /order/:id
- Update ->
- Delete ->

Users
- Create -> /order POST
- Read -> /orders or a single order /order/:id
- Update ->
- Delete ->

## Wireframe/UX Design

- Visuals of what the app would look like, and the flow of its content. Great websites for this would be [Figma](https://www.figma.com/), [Diagrams.net](https://www.drawio.com/), or any other tool you would like to use to draw

## User Login/Registration

You can safely avoid registering and logging in users. Have users already created in your database.
DO NOT CREATE A LOGIN OR REGISTER PAGE

```
app.get('/login/:id', (req, res) => {
  // using encrypted cookies
  req.session.user_id = req.params.id;

  // or using plain-text cookies
  res.cookie('user_id', req.params.id);

  // send the user somewhere
  res.redirect('/');
});
```
## Git Repo setup

We also went over the github repo setup.
Remember, only one person forks the LHL repo, and everyone else will clone that group members fork.
Example:
Group Member A forks the LHL repo, Group Member B and C will clone Group Member A's repo.
You will all be working out of one repo. You can invite people as collaborators for the repo by following this [guide](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-access-to-your-personal-repositories/inviting-collaborators-to-a-personal-repository)
Whenever you are working on a new feature, create a new branch. Please avoid working on the main branch as you may lose your work, or your other group members work

DO NOT CODE ON MAIN-> Always branchout

## Dividing up the workflow

Users need to create maps

Users need to view maps

Horizontally - each dev working on only FE, BE, or DB
Vertically - each dev working on a slice of FE, BE, and DB -> Feature based

[Trello](https://trello.com/) and Github provides tools for your group to organize the workflow of your app. You can see who is working on what, and what is left on the to-do list. You can leave notes for other group members as well.

# Node version

Stay on 16
nvm install 16
nvm alias default 16

Best of luck everyone!
