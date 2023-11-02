# AI Assistant

## Overview

1. [Description](#description)
2. [Deployment Links](#deployment-links)
3. [Installation](#installation)
4. [Technologies Used](#technologies)
5. [Deliverables](#deliverables)
6. [Planning/Build Process](#planning)
7. [Challenges](#challenges)
8. [Wins](#wins)
9. [Key Learnings & Takeaways](#takeaways)
10. [Future Improvements](#future-improvements)

<br>

## <a name="description"></a> 1. Description

A chatGTP AI-based web application that uses openAI's machine learning model. This project was built using HTML/CSS/JS, vite, node.js and openAI. The user can communicate with a GTP3 model API and ask the AI for help with JavaScript, React or any other language, for example give it code to translate from one to another language or help debugging. The frontend is based in vanilla JavaScript project using vite and the backend was built with node.js. The application also has a fully responsive layout created with pure CSS.

ex:

> write a function in JavaScript that determines if email address provided is valid or not
> how to creae functional component in react
> explain the difference between react and vue

## <a name="deployment-links"></a> 2. Deployment Links

- frontend deployed on [Vercel](https://vercel.com/):<br>https://ai-assistant-puce-five.vercel.app/<br>

- backend deployed on [render](https://render.com/): <br> https://ai-assistant-qdtj.onrender.com/

## <a name="installation"></a> 3. Installation

### Frontend (client):

- package manager used: npm (v9.5.0)
  - https://www.npmjs.com/package/npm
- to install dependencies, run:

```zsh
npm install
```

<br>

### Backend (server):

- package manager used: npm (v9.5.0)
  - https://www.npmjs.com/package/npm
- to install dependencies, run:

```zsh
npm install
```

## <a name="technologies"></a> 4. Technologies Used

### Front End

- The front end of this web application was created using Vite and vanilla JavaScript with the following command:

```zsh
npm init vite@latest client -- --template vanilla
```

- vite (v4.4.5)

  - https://www.npmjs.com/package/vite
  - https://github.com/vitejs/vite
  - https://vitejs.dev/

- UI
  - fonts
    - "Alegreya Sans" designed by Juan Pablo del Peral & Huerta Tipográfica
      - https://fonts.google.com/specimen/Alegreya+Sans
      - https://fonts.googleapis.com/css2?family=Alegreya+Sans:wght@100;300;400;500;700;800;900&display=swap
      - https://www.fontsquirrel.com/fonts/alegreya-sans
  - icons
    - iconify
    - https://icon-sets.iconify.design/

### Backend

- cors (v2.8.5)
  - https://www.npmjs.com/package/cors
  - https://github.com/expressjs/cors
- dotenv (v16.3.1)
  - https://www.npmjs.com/package/dotenv
  - https://github.com/motdotla/dotenv
- express (v4.18.2)
  - https://www.npmjs.com/package/express
  - https://github.com/expressjs/express
  - https://expressjs.com/
- nodemon (v3.0.1)
  - https://www.npmjs.com/package/nodemon
  - https://github.com/remy/nodemon
  - https://nodemon.io/
- openai (v4.14.2)
  - https://www.npmjs.com/package/openai
  - https://github.com/openai/openai-node
  - https://platform.openai.com/docs/api-reference/introduction

### Additional tools used:

- API: OpenAI
  - https://openai.com/product
  - https://platform.openai.com/
- Vercel
  - used to deploy the frontend
  - https://vercel.com/
- render
  - used to deploy the backend
  - https://render.com/
- Git / GitHub
  - used for version control
  - https://git-scm.com/
  - https://github.com/https://github.com/
- Visual Studio Code (VSCode)
  - code editor used for writing CSS, JSX, JavaScript and ruby.
- Google Chrome browser
  - used for launching the website and displaying the application Google Chrome
- Google Chrome Developer Tools: For troubleshooting and debugging
  - https://www.google.com/intl/en_uk/chrome/

### Resources

- tutorials by JavaScriptMastery /
  Adrian Hajdin:
  - https://www.youtube.com/watch?v=2FeymQoKvrk
  - https://www.youtube.com/@javascriptmastery
  - https://github.com/adrianhajdin
  - https://github.com/adrianhajdin/project_openai_codex

## <a name="deliverables"></a> 5. Deliverables

### MVP requriements

- mobile responsive design

### Stretch Goals

- high quality, professional design

## <a name="planning"></a>6. Planning / Build Process

### Timeframe

- project started on 01/11/2023

### User stories

- As a user I should be able to type in a prompt.
- As a user I should be able to get a response from the AI assistant that is helpful.

<br>

## 7. <a name="challenges"></a> Challenges

While trying to fetch data from the API I kept running into the error: "Assertion failed: Input argument is not an HTMLInputElement".

This was due to an issue with a browser extension extension I was using. The LastPass password manager extension tries to autofill password fields, and according to chatGTP "sometimes its scripts may cause interference with web pages, especially those that employ dynamic content or JavaScript-based elements".

I solved this by disabling LastPass for this site to prevent it from attempting to autofill on that specific page.

## 8. <a name="wins"></a> Wins

## <a name="takeaways"></a> 9. Key Learnings & Takeaways

## <a name="future-improvements"></a> 10. Future Improvements
