import mongoose from 'mongoose';
import express from 'express'
import 'dotenv/config'
const app = express()

const connectDB = async (app) => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('✅ Connected to Nexus Database');

        // Start server ONLY after successful DB connection
        app.listen(process.env.PORT, () => {
            console.log(`🚀 Server running on port: ${process.env.PORT}`);
        });
    } catch (err) {
        console.error('❌ Database Connection Error:', err.message);
        process.exit(1); // Exit process on failure
    }
};


export default connectDB;