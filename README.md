# ScribbleChat
#### Capstone project for Epicodus - Chat application where you draw messages
#### By Shanen Cross

## Project Description

A chat application where you draw your messages! Built in React.

A real-time chat web app where you draw and send digitally drawn pictures as messages. Inspired by the “PictoChat” software on the Nintendo DS handheld game console, combined with the functionality of a chat app like Discord.

### MVP goals:
* Users must enter a username in order to post
* Users can draw on a digital canvas with a standard brush tool, using a mouse
* Users can send their drawing to a live chat for other users to see
* Chat updates for all users in real-time
* Each chat message is labeled with its author’s username
* Chat messages are stored in the server and remain upon page refresh for all users

### Stretch goals:
* Users can “scribble share”, similar to “screen sharing” or streaming in Discord, sharing a canvas that users can draw on simultaneously in real-time, in addition to the normal drawing chat
* More drawing features, such as erasing, colors, and undo/redo buttons
* More chat features, such as DMs and multiple channels
* Registration/login functionality

## Capstone proposol

Full proposal for capstone project is here: 
[Capstone Proposal](projectProposal.md)

## Technologies Used
* HTML
* CSS
* JavaScript
* React
* HTML5 Canvas

## Setup / Installation requirements

### Installing Prerequisites
* Install git
* Install [npm](https://www.npmjs.com/), the JavaScript package manager. For development, I used npm version 6.14.10

### Installing Application
* Use ```git clone``` to download this repository to a local directory
* Navigate to this local directory in your terminal, which should be named ```scribble-chat``` by default
* Enter ```npm install``` on the command line to install the necessary modules
* Enter ```npm start``` on the command line to build the project and run a local server. The website will automatically open in your web browser. By default, the URL should be _http://localhost:3000/_

## Research & Planning Log
### Saturday, 09/04
* 10:00pm: Write basic README and install create-react-app template.
* 10:15pm: Add to-do-list and project proposal 

### Sunday, 09/05
* 7am: Read about render props and higher-order components, in preparation for reading about hooks
* 8am: Read about React hooks
* 9am: Read about Canvas vs SVG for React drawign apps

### Sunday 09/19
* 4pm: Read pages and watch videos about Firebase/Firestore/Redux -- trying to determine if I want/need Redux?

## To-do list
* Research text chat applications in React -- not worrying about the drawing functionality, how would you make a basic chat app?
* Research drawing applications in React and Canvas -- not worrying about the chat app functionality, how would you make a basic drawing app?
* Research Firebase and NoSQL versus other backend alternatives -- see if it is suitable for a chat app, and also for real-time shared drawing (stretch goal feature)
* Research Socket.IO for real-time and Express for backend?
* Research React hooks -- What are they, do I need them? Or Redux?
* Determine of Canvas or SVG is more suitable for a drawing app

## Notes
* There's a a "React Chat SDK" from "Stream": https://getstream.io/chat/sdk/react/
  * Tutorial here: https://getstream.io/chat/react-chat/tutorial/
* Building Drawing App with Canvas: https://www.youtube.com/watch?v=FLESHMJ-bI0
* Intro to React Hooks: https://css-tricks.com/intro-to-react-hooks/
* Introducing hooks: https://reactjs.org/docs/hooks-intro.html
* How to Build Free-Hand Drawing Using React (with SVG): https://pspdfkit.com/blog/2017/how-to-build-free-hand-drawing-using-react/

## License
* [MIT](LICENSE)
* Copyright 2021 Shanen Cross
