const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Connect to local MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/testdb')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err));

// Basic route
app.get('/', (req, res) => res.send('Hello MEAN Stack!'));

app.listen(port, () => console.log(`Server is running on port ${port}`));

