const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const productSchema = mongoose.Schema({
    title: String,
    quantity: Number,
    price: Number
});
const Product = mongoose.model('items',productSchema)

const getProducts = async() =>{
    const products =  await Product.find({}).select({ "title": 1, "quantity": 1, "price": 1}).limit(10);
    return products;
}

const deleteProduct = (id) => {
    console.log('delete me',id);
    return Product.deleteOne({_id:mongoose.Types.ObjectId(id)});
}
//GET ALL ITEMS
router.get('/all',async (req, res) => {
    let products = await getProducts();
    console.log('products~~>',products);
    res.send(products)
})

//CREATE NEW ITEM
router.post('/create',async (req, res) => {
    console.log(req.body)
    const product = new Product({
        title: req.body.title,
        quantity: req.body.quantity,
        price: req.body.price
    });
    await product.save();
    //console.log({'message':'Created Successfully'},product)
    res.send({'message':'Created Successfully',data:product})
})

//EDIT AN ITEM
router.put('/edit/:id', (req, res) => {

});

//DELETE AN ITEM
router.delete('/delete/:id', async (req, res) => {
    console.log('M REQ',req.params.id)
    await deleteProduct(req.params.id);
    res.send({'message':'Deleted Successfully'})
});

module.exports = router;
