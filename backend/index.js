const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const introutes = require('./routes/Interiorroutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const port = 3000;

// MongoDB connection details
const mongodbServer = 'mongodb+srv://';
const username = 'dbUser';
const password = 'dbPassword123';
const clustername = 'cluster0.noxusbn.mongodb.net';
const databasename = 'GTLStock';

// Connect to MongoDB
mongoose
  .connect(
    `${mongodbServer}${username}:${password}@${clustername}/${databasename}?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => console.log('Connected to database'))
  .catch((error) => console.log(error));


app.use('/api', introutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});