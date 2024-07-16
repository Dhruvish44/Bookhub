const mongoose = require("mongoose");

const databaseConnection = () => {
  // mongoose
  //   .connect(process.env.MONGOURI, {
    mongoose.connect("mongodb://127.0.0.1:27017/bookhub",{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log(`Database is Connected successfully`);
    });
};
module.exports = databaseConnection;
