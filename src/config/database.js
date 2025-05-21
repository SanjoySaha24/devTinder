// const mongoose = require("mongoose")

// const connectDB = async () => {
//     await mongoose.connect(
// ""
//     );
// };

// module.exports = connectDB;

const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
    await mongoose.connect(process.env.MONGODB_URI);
};

module.exports = connectDB;