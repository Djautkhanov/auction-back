const Category = require("../models/category.model");

module.exports.categoryController = {
  addCategory: async (req, res) => {
    try {
      const categoris = await Category.create({
        name: req.body.name,
      });
      return res.json(categoris);
    } catch (error) {
      return res.json(error.message);
    }
  },

  getCategory: async (req, res) => {
    try {
      const categoris = await Category.find();
      return res.json(categoris);
    } catch (error) {
      return res.json(error.message);
    }
  },

  editCategory: async (req, res) => {
    try {
      const categoris = await Category.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
      });
      return res.json(categoris);
    } catch (error) {
      return res.json(error.message);
    }
  },

  deleteCategory: async (req, res) => {
    try {
      const categoris = await Category.findByIdAndDelete(req.params.id);
      return res.json(categoris);
    } catch (error) {
      return res.json(error.message);
    }
  },
};
