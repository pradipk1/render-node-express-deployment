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
