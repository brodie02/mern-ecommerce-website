import { connect, connection, mongoose } from 'mongoose'

mongoose.set('strictQuery', false);

const connectionString =
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mern-ecommerce';

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default connection