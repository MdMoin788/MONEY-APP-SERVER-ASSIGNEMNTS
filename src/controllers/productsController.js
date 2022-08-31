const express = require("express");
const router = express.Router();
const Products = require("../models/productsModel");


//to add products in the database
router.post("", async (req, res, next) => {
  try {
    const products = await Products.create(req.body);
    if (products) return res.json({ message: "products added successfully.", data:products });
    else return res.json({ message: "Failed to add products to the database" });
  } catch (ex) {
    next(ex);
  }
})


//to get the single products from the database
router.get("/:id", async (req, res, next) => {
  try {
    const singleItem = await Products.findById(req.params.id).populate("userId",['_id','email',"image"]).lean().exec()
 
    return res.json({singleItem:singleItem});
  } catch (ex) {
    next(ex);
  }
})
//to update the single products from the database
router.patch("/:id", async (req, res, next) => {
  try {
    const updatedProducts = await Products.findByIdAndUpdate(req.params.id, req.body,{new:true}).lean().exec()
 
    return res.json({updatedProducts:updatedProducts});
  } catch (ex) {
    next(ex);
  }
})
//to delete the single products from the database
router.delete("/:id", async (req, res, next) => {
  try {
    const deletedProducts = await Products.findByIdAndDelete(req.params.id).lean().exec()
    console.log('deletedProducts', deletedProducts);
 
    return res.json({product :" Products deleted from database succesfully", });
  } catch (ex) {
    next(ex);
  }
})
//to get the products from the database

router.get("", async (req, res, next) => {
  try {
    const products = await Products.find().populate("userId",['_id','email',"image"]).lean().exec()
 
    return res.json(products);
  } catch (ex) {
    next(ex);
  }
})
module.exports = router;