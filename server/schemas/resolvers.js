import { AuthenticationError } from 'apollo-server-express'
import { User, Product, Category, Order } from '../models/index'
import { signToken } from '../utils/auth'

const resolvers = {
  Query: {
    categories: async () => {
      return await Category.find()
    },
    products: async (parent, { category, name }) => {
      const params = {}

      if (category) {
        params.category = category
      }

      if (name) {
        params.name = {
          $regex: name
        }
      }

      return await Product.find(params).populate('categories')
    },
    product: async (parent, { _id }) => {
      return await Product.findById(_id).populate('categories')
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.products',
          populate: 'categories'
        })

        user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate)

        return user
      }

      throw new AuthenticationError('Not logged in')
    },
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.products',
          populate: 'categories'
        })

        return user.orders.id(_id)
      }

      throw new AuthenticationError('Not logged in')
    }
  }
}