import mongoose from 'mongoose'

const { Schema } = mongoose

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    min: 0,
    default: 0
  },
  categories: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Category',
      required: true
    }
  ]
})

const Product = mongoose.model('Product', productSchema)

export default Product