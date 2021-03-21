# Instructions

How to build this app!

#### Step 1:
  Create the base files you will need:

    touch index.html styles.css app.js

#### Step 2:
  In `index.html`, hold `shift` + `1` and press `tab` to generate some basic html.

#### Step 3:
  Rename the document title to `To Do List` in the `<title>` tags.

#### Step 4:
  In the command line: 

    open index.html

#### Step 5:
  In a new tab, open a font searcher (Google Fonts):
  - Find the font you want to use
  - Select the version of it
  - copy the <link>
  - paste it into `index.html` in the `<head>` section (above the `<title>` tags)

#### Step 6:
  In `index.html`, create a link to your CSS document:

    <link rel="stylesheet" href="./styles.css">

  > This should also be in the `<head>` section, below where you just put the google fonts link.


#### Step 7:
  In `index.html` create a link to your js script:

    <script src="./app.js"></script>
  
  > This should be in the `<body>` section.

#### Step 8:
  In your browser, search **Font Awesome cdn.js** (cdn helps to directly link it to your website)

  - Select the first option
  - Go to the CSS or styling tab
  - Copy the first link using the **Copy Link Tag** option
  - Paste it above the style sheet link in `index.html`

  > Font awesome has a library of icons and having the link in html means that you can just add icon tags and they will automatically turn into icons from the font awesome website

#### Step 9:
  In the body tag of the `index.html` document:

  - Add a `<header></header>` section
  - Add a `<h1></h1>` section with the title of your app

#### Step 10:
  In the body tag of the `index.html` document, add a `<form>` where the user can input their to do. This should have an input type of `text` and a class called `todo-input`.

  Underneath the form, add a button with a type of `submit` and a class of `todo-button`.

#### Step 11:
  Within the `<button></button>` tags, we can add a plus icon:
  - add `<i></i>` tags and give a class of `fas fa-plus-square`

#### Step 12:
  Now, you need somewhere to store all of the to-do's:
  - Under your form, add a `<div></div>` section
  - Give this `<div>` section a class of `todo-container`
  - Within the `<div>` section, add an `<ul></ul>` with a class of `todo-list`

#### Step 13:
  Within the `<ul>` section, add another `<div></div>` container with a class of todo:
  - Inside this `<div>` container, add an `<li></li>` tag
  - Inside the same `<div>` container, underneath the `<li>` tags, add some `<button></button>` tags.