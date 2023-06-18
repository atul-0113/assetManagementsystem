const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      isDeleted: { 
        type: Boolean, 
        default: false 
    },
    role: {
        type: String,
        enum: ["Admin", "User"],
        default: "User"
      },
      password: { 
        type: String, 
        required: true 
    },
      empCode: {
        type: Number,
        required: true,
        unique: true
      },
      allotedAssets: {
        type: Number,
        default: 0
      },
      isActive: {
        type: Boolean,
        default: true
      }
},{
    timestamps: true,
    versionKey: false
  })

module.exports= mongoose.model("Users" , userSchema)