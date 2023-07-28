import connectMongo from "@/lib/db";
import ProductModel from "./productModel";
import { methods } from "@/_server/constant";
import { searchingAndFiltering } from "@/_server/searchingAndFiltering";

export default async function handler(req, res) {
  try {
    await connectMongo();

    const { limit = 10, page = 1, name } = req.query;
    const skip = limit * (page - 1);
    const filter = searchingAndFiltering(req, new ProductModel(), [
      "name",
      "category",
      "description",
    ]);

    console.log(filter);
    // methods
    switch (req.method) {
      case methods.get: {
        const data = await ProductModel.find().limit(Number(limit)).skip(skip);
        return res
          .status(200)
          .json({ status: true, message: "Products received", data });
      }
      case methods.post: {
        const newProduct = new ProductModel(req.body);
        const data = await newProduct.save();
        return res.status(201).json({
          status: true,
          message: "Product Created successfully",
          data,
        });
      }

      default: {
        return res
          .status(405)
          .json({ status: false, message: "Method not allowed" });
      }
    }
  } catch (error) {
    res.status(405).json({ status: false, message: error.message, error });
  }
}
