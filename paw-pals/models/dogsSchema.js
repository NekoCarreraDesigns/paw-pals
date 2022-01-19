const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DogSchema = new Schema(
  {
    dogName: { type: String, required: true },
    status: { type: String, required: true },
    likes: { type: String, required: true },
    dislikes: { type: String, required: true },
    personality: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Dog = mongoose.model("Dog", DogSchema);
module.exports = Dog;
