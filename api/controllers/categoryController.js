const Category = require('../models/Category');
const mongoose = require('mongoose');

// get all categories
const getCategories = async (req, res) => {
  try {
    // find and sort descending order. latest first
    const cats = await Category.find({}).sort({ createdAt: -1 });
    res.status(200).json(cats);
  } catch (error) {
    res.status(500).json(error + 'could not fetch the documents');
  }
};

// get single category
const getCategory = async (req, res) => {
  const { id } = req.params;

  //checking to see if its a valid mongoose id
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'no such category' });
  }

  // checking our Catagories to find by id
  const category = await Category.findById(id);
  if (!category) {
    return res.status(404).json({ error: 'no such category' });
  }
  res.status(200).json(category);
};

// create a new category
const createCategory = async (req, res) => {
  const newCat = new Category(req.body);

  //add doc to db
  try {
    const savedCat = await newCat.save();
    res.status(200).json(savedCat);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// delete a category
const deleteCategory = async (req, res) => {
  const { id } = req.params;

  //checking to see if its a valid mongoose id
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'no such category' });
  }

  // checking if mongos _id matches the supplied id
  const category = await Category.findOneAndDelete({ _id: id });

  // if no category is found
  if (!category) {
    return res.status(404).json({ error: 'no such category' });
  }

  //if category is found and deleted. returns deleted category
  res.status(200).json(category);
};

// update a new category
const updateCategory = async (req, res) => {
  const { id } = req.params;

  //checking to see if its a valid mongoose id
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'no such category' });
  }
  const category = await Category.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  // if no category is found
  if (!category) {
    return res.status(404).json({ error: 'no such category' });
  }

  //if category is found and updated. then returns the original category
  res.status(200).json(category);
};

module.exports = {
  createCategory,
  getCategories,
  getCategory,
  deleteCategory,
  updateCategory,
};
