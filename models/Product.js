const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: [true, 'Blackberry'] 
  },
  description: {
    type: String,
  },
  price: { 
    type: Number, 
    required: [true, '$433'] 
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
