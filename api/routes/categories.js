const router = require('express').Router();

const {
  createCategory,
  getCategories,
  getCategory,
  deleteCategory,
  updateCategory,
} = require('../controllers/categoryController');

// Post a category
router.post('/', createCategory);

// GET all categories
router.get('/', getCategories);

//Get single category
router.get('/:id', getCategory);

//DELETE single category
router.delete('/:id', deleteCategory);

//DELETE single category
router.patch('/:id', updateCategory);

module.exports = router;
