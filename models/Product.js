const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: [true, 'Please provide a product name'] 
  },
  description: {
    type: String,
  },
  price: { 
    type: Number, 
    required: [true, 'Please provide a product price'] 
  },
  category: {
    type: String,
  },
  inStock: { 
    type: Boolean, 
    default: true 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

module.exports = mongoose.model('Product', productSchema);
