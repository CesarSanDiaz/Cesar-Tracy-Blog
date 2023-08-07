const mongoose = require('mongoose');

// will define the structure of document
const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    // {Title is used so that I can display the link to this without an space}
    // title: {
    //   type: String,
    //   required: false,
    //   unique: true,
    // },
    // label: {
    //   type: String,
    //   required: false,
    //   unique: false,
    // },
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
