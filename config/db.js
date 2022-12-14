const mongoose = require('mongoose');

//  DATABASE CONNECTION
const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(
    `MongoDB connected: ${conn.connection.host}:${conn.connection.port}/${conn.connection.name}`
      .cyan.underline.bold,
  );
};

module.exports = connectDB;
