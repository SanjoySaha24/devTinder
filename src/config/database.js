const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect(
    "mongodb+srv://namastedev:mn5lXx88ZtWg0Hqj@namastenode.m16t3j4.mongodb.net/devTinder"
    );
};
module.exports = connectDB;
