const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const host = '172.17.0.1';
    const port = 27017;
    const databaseName = 'database';
    const url = `mongodb://${host}:${port}/${databaseName}`;
    await mongoose.connect(url);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

export default connectDB;