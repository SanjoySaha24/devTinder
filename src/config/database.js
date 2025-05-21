const mongoose = require("mongoose")

const connectDB = async () => {
    await mongoose.connect(
"mongodb+srv://namastedev:WRW1e1Y18YsHi1CQ@namastenode.cljdbvm.mongodb.net/devTinder"
    );
};

module.exports = connectDB;