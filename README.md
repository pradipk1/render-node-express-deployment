# render-node-express-deployment

### 1. Setting up the application:

* <b>Create a project directory:</b> Use your terminal and navigate to your desired location. Run mkdir my-express-app to create a new directory.
* <b>Initialize project:</b> Inside the directory, run npm init -y to initialize a new Node.js project and create a package.json file.

### 2. Install dependencies:

* <b>Install Express framework:</b> Run npm install express in your terminal.

### 3. Create the Express app:

* Create a file named app.js in the project directory.
* Add the following code to app.js:

```js
const express = require('express');

const app = express();

// Define a route that responds with a simple message
app.get('/', (req, res) => {
  res.send('Hello from my simple Express app!');
});

// Get the port from environment variable or default to 3000
const port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
```

### 4. Deploy to Render.com:

* <b>Create a Render account:</b> Sign up for a free account on https://render.com/.
* <b>Connect your Git repository:</b> Link your GitHub account to Render and grant access to your project repository.
* <b>Create a new Web Service:</b> Click on "New Web Service" under the "Web Services" section.

* #### Configure deployment settings:
    * <b>Git repository:</b> Choose your project repository from GitHub.
    * <b>Branch:</b> Select the branch you want to deploy (usually "main").
    * <b>Environment:</b> Leave the environment variables blank for now.
    * <b>Runtime:</b> Select "Node.js".
    * <b>Build Command:</b> Leave blank (Render will automatically detect the Node.js application).
    * <b>Start Command:</b> Enter node app.js.
    * <b>Root Directory:</b> Leave blank.

* <b>Deploy:</b> Click on "Create" to start the deployment process.

### 5. Access your application:

* Once the deployment is complete, Render will provide you with a URL where your application is accessible.

### Explanation:

* This code creates a basic Express app that listens for requests on the specified port.
* The route handler function responds with a simple message when a GET request is made to the root path (/).
* The port is retrieved from the environment variable (process.env.PORT) if available, otherwise defaults to 3000.
* Render automatically detects the Node.js application and uses the provided start command (node app.js) to run the server.