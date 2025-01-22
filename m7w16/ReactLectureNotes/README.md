# Lighthouse Labs | React Fundamentals

* [X] React—what is it, and why use it?
* [X] JSX (JavaScript XML)
* [X] Components
* [X] Props


## Front-end Libraries and Frameworks

To assist developers in achieving this idea of a more modular, DRY, front-end codebase, talented and passionate developers in the JavaScript community began trying to write their own libraries that would bring structure and convention to the table. A set way and set of function that a developer can learn to use, and implement more easily alongside their team. Of these, we've seen a variety mature over the years from various companies and developers:

* [Angular](https://angular.io/) (Google)
* [Backbone](https://backbonejs.org/) (Jeremy Ashkenas)
* [Ember](https://emberjs.com/) (Yehuda Katz; Tilde Inc.)
* [React](https://reactjs.org/) (Jordan Walke; Facebook)
* [Svelte](https://svelte.dev/) (Rich Harris)
* [Vue](https://vuejs.org/) (Evan You)

Each of the above offers a potential solution for our problem. There is a level of rigidity added to the approach you'll take with any of these—you sacrifice some freedom for convention—that is to say: a correct, or preferred, way to organize your project to achieve this end.

If you play along with any of these frameworks, you'll find each and every one of them have convenient tools baked in to make working on your front-end code easier, cleaner, and faster! That boost in development speed, of course, is once you've gotten the hang of how it is they'd like you to use their library. Thankfully, most mature libraries in this ecosystem will have a solid documentation as well as there being a cornucopia of YouTube videos, forum posts, blog articles, books, and more at your fingertips for getting up to speed.

## Choosing a Library to Cover in Lighthouse

Picking a framework or library to power your front-end user interface can be daunting. Each carries its own strengths and weaknesses, its own set of features that may suit one project better over another! Given this, how did Lighthouse decide which one should be covered during your time in our program?

One metric is the amount of market share each one holds. Essentially—how popular is each one? Which one might be most likely to get you a job?

Another is how long it might take to learn the basics of the library, as in a bootcamp, we have no time to lose.

The top three libraries, in terms of both use and employability (at the time of writing these notes) are:

1. React (by a *Significant* Margin) `Estimated ~40% of Web Developers`
2. Angular `Estimated ~22% of Web Developers`
3. Vue `Estimated ~18% of Web Developers`

Alright, it sounds like React is the clear winner on that front! How about in the "covering within a bootcamp" category?

Well, conveniently enough, React is a nice middleground.

Angular has a lot more features built-in, and there is a lot more to learn in order to take advantage of each of them. This makes it harder for us to squeeze Angular into a short time-frame without sacrificing content or understanding.

How about Vue? Vue is the most lightweight of the three, and the only of the top three to be created by an individual and not a global corporation. It is meant to run very quickly, be fast to learn, but does not incorporate as many features out-of-the-box as React or Angular. Because it is newer, you won't always find as many answers or add-ons as the alternatives.

React finds itself in a very nice place for us to adopt here at Lighthouse. It is the most popular, most likely to get you a job, has the biggest community, the most add-ons, is reasonable to learn, and will still cover core concepts that you can carry over to other popular libraries.

## Browser Extensions

Please install React Developer Tools in any browsers you have installed, they'll provide a lot more insight during your development process, offering tips, warnings, and more detailed errors as you troubleshoot:

* [Google Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
* [Microsoft Edge](https://microsoftedge.microsoft.com/addons/detail/react-developer-tools/gpphkfbcpidddadnkolkpfckpihlkkil)
* [Mozilla Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)

You'll find they even offer you a few new tabs in the Web Developer Tools in these browsers; these will come in handy later!

## First Steps in React

Start by creating your React project with 

`npx creact-react-project project-name`

## JavaScript XML (JSX)

You'll find in most examples, as you traverse the web, an alternative syntax for your output. A lot of developers do not like typing out: `React.createElement()`, and then pass in information. People were hoping for a way to write the output that would more closely resemble HTML. The answer to this is a syntax called JSX!

JSX has the benefit of looking *very* similar to HTML, but still running in JavaScript—offering us the unique ability to embed JavaScript code and (in this case) React features in the markup.

**Note that JSX is not compatible with HTML or regular, vanilla, JavaScript.** It is a syntax layer written into the [Babel](https://babeljs.io/) compiler. To run this special syntax we'll need to include the Babel source code in our web page:

```HTML
<!-- Babel (for JSX Compatibility): -->
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
```

Now that Babel can help us out with any JSX, we can *convert* our existing React component to utilize this syntax, we'll be able to see the difference quite quickly!


```HTML
<!-- Don't forget to add: type="text/babel" -->
<script type="text/babel">
  const domContainerElement = document.getElementById('your-container');
  const reactRoot = ReactDOM.createRoot(domContainerElement);

  function HelloComponent () {
    // Here we can see JSX at work! Much cleaner...
    return <p onClick={() => {console.log('Clicked!');}}>Hello, World!</p>;
  }

  reactRoot.render(HelloComponent());
</script>
```

Consider an application, as it grows and grows. You'll have more and more components, and each one may have any number of elements that it'll need to contain. It is much easier to read code written in JSX, as it so closely represents the final output and is organized much more clearly.

There are some rules you should keep in mind when writing JSX code:

* There can only be one root element per JSX expression
* Any opening tags must have a corresponding closing tag
* Self-closing elements must end with `/>`, as per XHTML / XML syntax (example: `<img />`)
* Multi-line JSX expressions should be wrapped in parenthesis `()`
* Regular JavaScript expressions can be executed in elements with use of curly braces `{}`
* JavaScript reserved words (example: `for`, `class`) should not be used as element or attribute names (look up alternatives like: `htmlFor`, `className`)

At the end of the day, the JSX code is actually being "compiled" (transpiled) using Babel, into regular JavaScript. Consider JSX a syntax sugar that makes the development process a bit easier, as it isn't a real JavaScript feature.

So is this, then, the process React developers usually follow in creating their applications? It can be in a pinch, but there is a *better* way!

## Create React App

There is a command-line tool we can make use of to quickly generate React projects called "[Create React App](https://create-react-app.dev/)." This is a very powerful and optimized tool that has become the defacto standard for starting work on a React application. It comes, out-of-the-box with amazing features like:

* Babel for transpiling JSX
* Easy inclusion of third-party libraries
* Debugging and lint tools for ease of troubleshooting
* Live-refresh of the project on file save
* Build tools for minifying and launching your project
* A test suite for writing application and component tests

To get started, navigate in your terminal to your projects directory. Consider the name you'd like to use for your project, this tool will create a new folder for us with a name we give it. Run the following, switching out `my-first-react-app` with a descriptive name for your project:

```bash
# Generate a React application.
npx create-react-app my-first-react-app

# Navigate in your terminal to this new application directory.
cd my-first-react-app
```

Open the project in your favourite editor, and let's have a look around!

### The Create React App Directory Structure

There are a variety of files in the project to give you an idea of how and where to put things.

* `public`: Static assets that will not need to be run through Babel, Sass, etc.
* `src`: Working project files (before transpilation)

Note that `/public/index.html` represents the static page you'll see in the browser when running the application, and it can be customized to your needs. 

For more information on `/public/robots.txt`, and how it can be used to let bots know where, or if, they should read parts of your site, check out [`robotstxt.org`](https://www.robotstxt.org/robotstxt.html).

### Try Running the App

Run your project to see if everything is configured and installed properly:

```bash
npm start
```

The default configuration in a Create React App application will have this command run through a number of steps and ultimately run `/src/index.js` as the application entry-point.

In a few seconds, you should see it go through the app, linting and checking for errors in the code. As it is fresh, it should run error-free and it will attempt to open the project in your default web browser with the default address: [`http://localhost:3000`](http://localhost:3000). Note that if port `3000` is in use, it will keep bumping the port up by `1` until it finds a free port (so `3001` would be next, if you already had another program taking up that port.) 

This web page will automatically refresh as you make changes to the application! Try opening `/src/App.js` and changing some of the text content in the element(s), you'll see the text update in the browser in real-time once you save the file.

This set-up includes a fantastic toolchain for development, and comes with a lot of bells and whistles out of the box, as you are already seeing. Note that React itself *is* a front-end only library, but this environment comes with a server so you can easily see how it would look and behave if launched. Each time you hit save, it is transpiling your `/src/` files into regular JavaScript files that can be understood by the browser. Not all JavaScript libraries out there have a development system as robust as all of this!

### Trimming Files you Might not Need

It is important to note that not all files that are placed in the initial project are necessary in order to run or build a React app, many are there as an example or in case you need them for your particular use-case. If you'd like to focus on only some basic React practice, consider removing the following files:

* `/src/App.css`
* `/src/App.js`
* `/src/App.test.js`
* `/src/logo.svg`
* [`/src/reportWebVitals.js`](https://create-react-app.dev/docs/measuring-performance/#:%7E:text=reportWebVitals)
* `/src/setupTests.js`

If you remove the above, you'll also need to look inside the `/src/index.js` file and **remove** the following lines:

```JavaScript
// REMOVE the following (if you got rid of files from the list:)

import App from './App'; // X
import reportWebVitals from './reportWebVitals'; // X

// ...

  <App /> // Replace this with your own components!

// ...

reportWebVitals(); // X
```

You would also, for real application, want to replace the React icon that appears in the browser tabs with one more fitting for your project:

* `/public/favicon.ico`
* `/public/logo182.png`
* `/public/logo512.png`

If you don't have software installed that can save an `.ico`, you can consider some web applications or software out there like [Favicon.ico & App Icon Generator](https://www.favicon-generator.org/) to bridge the gap.

## Components

Components are just functions that return a "React DOM Element," compatible output. For cases like a `create-react-app` project, this usually simply means some JSX! Let's create our first component in a new file, `/src/components/Hello.jsx`. You can name the file using either `.js` or `.jsx` as an extension, but `.jsx` will let your editor know you might use JSX, and it may offer more suggestions to you.

We'll place the following in the file, make note of the use of [ES6 Module syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) (`import` and `export`:)

```JavaScript
// Components are usually named in PascalCase
function Hello() {
  return <p>Hello, World!</p>; // Return JSX, this is our "render."
}

export default Hello; // Allows us to import this function in other files.
```

We can now call upon this component in other files. If you've slimmed down your project, we can use the `/src/index.js` file, adding an `import` statement and our component:

```JavaScript
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Import your component, so you can use it in this file!
import Hello from './components/Hello';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Hello /> // Add your component to the render, or you won't see it in the browser!
  </React.StrictMode>
);
```

Take a look in the browser... congratulations!!! Your very first component!

## Props

Let's suppose we had a regular JavaScript function that said hello, like so:

```JavaScript
function sayHello() {
  return `Hello!`;
}

console.log(
  sayHello()
);
```

How might we make this function more re-usable, so it could say hello to anyone? If we add a `name` parameter, all of a sudden, we have the ability to change that potential return value. Let's give it a shot:

```JavaScript
function sayHello(name) {
  return `Hello ${name}!`;
}

console.log(
  sayHello('Sam')
);

console.log(
  sayHello('Quinn')
);
```

Much better, look at that! We can do the same thing in React, JSX offers us some awesome syntax sugar. In React, instead of parameters, we refer to these as "[props](https://reactjs.org/docs/components-and-props.html)."

Let's adapt the above example into a new component, `/src/components/SayHello.jsx`:

```JavaScript
function SayHello(props) { // Components accept an object: props
  // We use curly braces in JSX to run a JS expression.
  return <p>Hello, {props.name}!</p>;
}

export default SayHello;
```

How do we populate this props object, though!? Observe their use in `/src/index.js`:

```JavaScript
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// import Hello from './components/Hello';
import SayHello from './components/SayHello'; // Don't forget to import!

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    // <Hello />
    // Now we can re-use this component, and customize its output with props!
    <SayHello name="Sam" />
    <SayHello name="Quinn" />
  </React.StrictMode>
);
```

Have another look in your browser to see props in action!

## Conditional Rendering

How might we make decisions in our component render (`return`)? Let's make another component to see one way this could be done.

Create a new file, `/src/components/Mood.jsx`:

```JavaScript
function Mood(props) {
  return ( // Remember, multi-line JSX needs to be in parenthesis.
    <section> // You can only have one root element in the return.
      <h2>My name is {props.name}</h2>
      // We cannot easily use `if` (aside from ternary) in JSX...
      // This results in a pattern of `and` to determine if we...
      // see one output from an expression or another.
      // `false` will not result in any HTML showing in the browser.
      {props.mood && props.mood.toLowerCase() === 'happy' &&
        <p>I am feeling very happy about everything!</p>}
      {props.mood && props.mood.toLowerCase() === 'sad' &&
        <p>Today isn't a great day...</p>}
      {props.mood && props.mood.toLowerCase() === 'mad' &&
        <p>I just wanna' scream!</p>}
      {!['happy', 'sad', 'mad'].includes(props.mood && props.mood.toLowerCase()) &&
        <p>I don't know how I'm feeling...</p>}
    </section>
  );
}

export default Mood;
```

Note how the value returned in each expression is the last truthy value in an `&&` chain. If something results in a `false`, it simply is not rendered in the browser. Let's try using this component now, head to `/src/index.js`:

```JavaScript
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// import Hello from './components/Hello';
// import SayHello from './components/SayHello';
import Mood from './components/mood'; // Don't forget to import!

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    // <Hello />
    // Now we can re-use this component, and customize its output with props!
    // <SayHello name="Sam" />
    // <SayHello name="Quinn" />
    <Mood name="Sam" mood="happy" />
    <Mood name="Quinn" mood="sad" />
    <Mood name="Ari" mood="mad" />
    <Mood name="Kade" mood="other" />
  </React.StrictMode>
);
```

This example happens to use multiple props, and conditional rendering! Have a look in the browser to confirm that it is working properly.


## Resources

* [Add React in One Minute](https://reactjs.org/docs/add-react-to-a-website.html#add-react-in-one-minute)
  * [Try JSX](https://reactjs.org/docs/add-react-to-a-website.html#optional-try-react-with-jsx)
* [JavaScript XML (JSX)](https://reactjs.org/docs/introducing-jsx.html)
* [Babel](https://babeljs.io/)
* [JavaScript ES6 Module Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
* [Creating a Production Build](https://create-react-app.dev/docs/production-build)
* [React "StrictMode"](https://reactjs.org/docs/strict-mode.html)
* [Components and Props](https://reactjs.org/docs/components-and-props.html)
* [Using the State Hook](https://reactjs.org/docs/hooks-state.html)
* [Forms in React](https://reactjs.org/docs/forms.html)
* [`Array.map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
* [Robots.txt](https://www.robotstxt.org/robotstxt.html)
* [Favicon.ico & App Icon Generator](https://www.favicon-generator.org/)
* [Oreilly's Learning React, 2nd Edition (Warren's Favourite Resource!)](https://www.oreilly.com/library/view/learning-react-2nd/9781492051718/)