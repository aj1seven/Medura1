import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb+srv://cherancaiml2023_db_user:aj1seven@cluster0.zr2gh6q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

export async function connectToMongoDB() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB successfully');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1);
  }
}

export async function disconnectFromMongoDB() {
  try {
    await mongoose.disconnect();
    console.log('✅ Disconnected from MongoDB');
  } catch (error) {
    console.error('❌ MongoDB disconnection error:', error);
  }
}
