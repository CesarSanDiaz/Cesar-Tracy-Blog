const router = require('express').Router();
const User = require('../models/User');
const Post = require('../models/Post');
const bcrypt = require('bcrypt');

//UPDATE
router.put('/:id', async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json('You are not the owner of this account');
  }
});

//DELETE
router.delete('/:id', async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      try {
        await Post.deleteMany({ username: user.username });
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json('User has been deleted');
      } catch (err) {
        res.status(500).json(err);
      }
    } catch (err) {
      res.status(404).json('User not found!');
    }
  } else {
    res.status(401).json('You can only delete your account!');
  }
});

//GER USER by id
// router.get('/:id', async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id);
//     const { password, ...others } = user._doc;
//     res.status(200).json(others);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// getting user by username if no query. gets all users
router.get('/', async (req, res) => {
  // res.json({ requestParams: req.params });
  //destructuring username from the request.query
  const { username, email } = req.query;
  // then can i do this and do it for all the key value pairs?
  // const { username, email, } = req.query;
  // or const { ...all } = req.query;

  try {
    let users;
    // if query find that
    if (username) {
      users = await User.find({ username });
    } else {
      users = await User.find();
    }
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error + ', could not fetch user with that username');
  }
});

// GET all users
// router.get('/', async (req, res) => {
//   try {
//     const users = await User.find();
//     res.status(200).json(users);
//   } catch (error) {
//     res.status(500).json(error + 'could not fetch users');
//   }
// });

module.exports = router;
