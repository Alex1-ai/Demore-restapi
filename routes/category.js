const Category = require("../models/Category");
// const router = require("./user");
const {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");
const router = require("express").Router()


// CREATE CATEGORY
router.post("/", verifyTokenAndAdmin, async(req, res)=>{
    const newCategory = new Category(req.body);

    try{
        const savedCategory = await newCategory.save();
        res.status(201).json(savedCategory);

    }catch(err){
        res.status(500).json(err)
    }

})


// UPDATE CATEGORY
router.put("/:id", verifyTokenAndAdmin, async(req,res)=>{
    // const categoryId = req.params.id;
    try{
        const updatedCategory = await Category.findByIdAndUpdate(
            req.params.id,{
                $set:req.body
            },{new:true}
        )
        return res.status(200).json(updatedCategory)

    }catch(err){
        return res.status(500).json(err)
    }

})



// DELETE CATEGORY
router.delete("/:id", verifyTokenAndAdmin, async(req,res)=>{
    try{
        await Category.findByIdAndDelete(req.params.id);
        return res.status(200).json("Category deleted successfully")

    }catch(err){
        return res.status(500).json(err)
    }

});

// GET A SINGLE CATEGORY
router.get("/find/:id", async(req,res)=>{
    try{
        const category = await Category.findById(req.params.id)
        // console.log(category)
        return res.status(200).json(category)

    }catch(err){
        return res.status(500).json(err)
    }
})


// GET ALL CATEGORIES
router.get("/", async(req, res)=>{
    try{
        const categories = await Category.find()

        return res.status(200).json(categories);

    }catch(err){
        return res.status(500).json(err)
    }
})



module.exports = router