const router = require('express').Router();
const Post = require('../models/Post');

//CREATE POST
router.post('/', async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE POST
router.put('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedPost);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json('You can only update your post!');
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE POST
router.delete('/:id', async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (post.username === req.body.username) {
    Post.findByIdAndDelete(post)
      .then((blog) => {
        if (!blog) {
          return res.status(404).json('no blog found');
        }
        res.status(200).json('Post has been deleted...');
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  } else {
    res.status(401).json('You can only delete your post!');
  }
});

//GET POST
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL POSTS
router.get('/', async (req, res) => {
  // getting posts depending on query
  const username = req.query.user;
  const catName = req.query.cat;
  try {
    let posts;
    if (username) {
      posts = await Post.find({ username });
    } else if (catName) {
      posts = await Post.find({
        categories: {
          $in: [catName],
        },
      });
    } else {
      posts = await Post.find().sort({ createdAt: -1 });
    }
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err + 'could not fetch all documents');
  }
});

module.exports = router;
