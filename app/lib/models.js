import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
  },
  { timestamps: true }
);

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
    },
    color: {
      type: String,
    },
    size: {
      type: String,
    },
    image: { // Add image field
      type: String, // Store as base64 encoded string
    },
  },
  { timestamps: true }
);

const childSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    studentID: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
      min: 0,
    },
    ekibiina: {
      type: String,
      required: true,
    },
    nationality: {
      type: String,
      required: true,
    },
    parentStatus: {
      type: String,
      required: true,
    },
    levelOfNeed: {
      type: String,
      required: true,
    },
    yearsLeftToGraduate: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const photoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
}, 
  { timestamps: true }
);

export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Product = mongoose.models.Product || mongoose.model("Product", productSchema);
export const Child = mongoose.models.Child || mongoose.model("Child", childSchema);
const Photo = mongoose.models.Photo || mongoose.model("Photo", photoSchema);

export default Photo;

