const express = require("express");
const router = express.Router();
const Review = require("../models/reviewModel");


//to add products in the database
router.post("", async (req, res, next) => {
  try {
    const review = await Review.create(req.body);
    if (review) return res.json({ message: "products added successfully." });
    else return res.json({ message: "Failed to add products to the database" });
  } catch (ex) {
    next(ex);
  }
})


//to get the products from the database

router.delete("/:id", async (req, res, next) => {
  try {
    const review = await Review.findByIdAndDelete(req.params.id).lean().exec()
    return res.json({review : "review is deleted from the database"});
  } catch (ex) {
    next(ex);
  }
})

router.get("", async (req, res, next) => {
  try {
    const review = await Review.find().populate("userId",['_id','email',"image"]).populate("userId",['_id','email',"image"]).populate("productID",['_id','name',"price"]).lean().exec()
    return res.json(review);
  } catch (ex) {
    next(ex);
  }
})

module.exports = router;