const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const categoryRoute = require('./routes/categories');
const multer = require('multer');
const cors = require('cors');
const path = require('path');

app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

dotenv.config();
app.use(express.json());
app.use('/images', express.static(path.join(__dirname, '/images')));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images');
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post('/api/upload', upload.single('file'), (req, res) => {
  res
    .status(200)
    .json('file has been uploaded')
    .catch((error) => {
      console.log(error);
    });
});

//Middleware these functions will fire for every request that comes in
//In this case its logging to console the type of request
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/posts', postRoute);
app.use('/api/categories', categoryRoute);

//connect to db using mongoose. Helps with Schemas to be stricter with documents
mongoose
  //will authenticate our credentials on mongo. We don't want to listen until we are in
  .connect(process.env.MONGO_URL)
  .then(() => {
    // Once in, listen for requests to our port
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT);
    });
  })
  .catch((error) => console.log(error));
