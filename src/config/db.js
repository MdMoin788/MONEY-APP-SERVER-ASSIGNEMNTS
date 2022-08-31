const mongoose = require("mongoose");

const connect = async () => {
  try {
    return await mongoose.connect(
      "mongodb+srv://moinjack788:moin_788@cluster0.p9u5k.mongodb.net/moeny-app-assignments?retryWrites=true&w=majority"
    );
  } catch (err) {
    console.log("error form connection :", err.message);
  }
};

module.exports = connect;

