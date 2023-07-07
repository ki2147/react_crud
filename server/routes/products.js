const router = require('express').Router();
const { StrictMode } = require('react');
let Product = require('../models/product.model');

// all routes go here
router.route('/').get((req, res) => {
  Product.find()
    .then(products => res.json(products))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Product.findById(req.params.id)
    .then(product => res.json(product))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {

    let newProduct = new Product({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        category: req.body.category
      });
    
      // Add any additional properties that were included in the request
      for (let prop in req.body) {
        if (newProduct[prop] === undefined) {
          newProduct.set(prop, req.body[prop]);
        }
      }
  
    newProduct.save().then(product => {
        console.log(product);
        res.status(201).json('Product added!')
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });
  

router.route('/delete/:id').delete((req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then(() => res.json('Product deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Product.findById(req.params.id)
      .then(product => {
        product.name = req.body.name;
        product.price = req.body.price;
        product.description = req.body.description;
        product.category = req.body.category;
  
        // Update any additional properties that were included in the request
        for (let prop in req.body) {
          if (product[prop] === undefined) {
            product.set(prop, req.body[prop]);
          }
        }
  
        product.save()
          .then(() => res.json('Product updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  

module.exports = router;
