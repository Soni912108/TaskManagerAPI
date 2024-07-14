const mongoose = require("mongoose");


// initializing a simple mongoose Schema to represent the users collection
const UsersSchema = mongoose.Schema(
    {
      username: {
        type: String,
        unique:true,
        required: [true, "Please enter your username"],
      },

      email: {
        type: String,
        unique:true,
        required: [true, "Please enter your email"],
      },
  
      password: {
        type: String,
        required: [true, "Please enter your password"],
        length: [Number],
        default: 0,
      },
    },
    {
      timestamps: true,
    }
  );
  

module.exports = mongoose.model("Users", UsersSchema);