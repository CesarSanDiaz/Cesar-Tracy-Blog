const mongoose = require('mongoose');

// will define the structure of document
const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    photo: {
      type: String,
      required: false,
    },
  },
  // will automatically create timestamps for creation and updating
  { timestamps: true }
);

// will apply this schema to the Category model
module.exports = mongoose.model('Category', CategorySchema);
