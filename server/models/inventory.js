const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema(
  {
    modelName: {
      type: String,
      required: true,
    },
    serialNo: {
      type: String,
      required: true,
      unique: true,
    },
    deviceType: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    year: {
      type: Date,
      default: new Date(),
    },
    operatingSystem: {
      type: String,
      required: true,
    },
    statusActive: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Inventory", inventorySchema);
