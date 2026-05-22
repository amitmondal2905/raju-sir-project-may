const Product = require('../models/Product');

//    Create a product
//   POST /api/products

const createProduct = async (req, res) => {
  try {
    const { name, description, price, category, inStock } = req.body;

    const product = new Product({
      name,
      description,
      price,
      category,
      inStock
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//    Get all products
//    GET /api/products

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//     Get single product
//    GET /api/products/:id

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//     Update a product
//    PUT /api/products/:id

const updateProduct = async (req, res) => {
  try {
    const { name, description, price, category, inStock } = req.body;

    const product = await Product.findById(req.params.id);

    if (product) {
      product.name = name || product.name;
      product.description = description !== undefined ? description : product.description;
      product.price = price || product.price;
      product.category = category !== undefined ? category : product.category;
      product.inStock = inStock !== undefined ? inStock : product.inStock;

      const updatedProduct = await product.save();
      res.status(200).json(updatedProduct);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//     Delete a product
//   DELETE /api/products/:id

const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (product) {
      await product.deleteOne();
      res.status(200).json({ message: 'Product removed' });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct
};
