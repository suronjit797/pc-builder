import { productEnum } from "@/_server/constant";
import { Schema, model, models } from "mongoose";

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    keyFeatures: [
      {
        type: String,
        required: true,
      },
    ],
    category: {
      type: String,
      enum: productEnum,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      require: true,
    },
    individualRating: {
      type: Number,
      default: 0,
    },
    averageRating: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

const ProductModel = models.Product || model("Product", productSchema);

export default ProductModel;
