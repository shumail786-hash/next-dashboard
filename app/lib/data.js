import { Product, User } from "./models";
import { connectToDB } from "@/app/lib/database.js";

export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEMS_PER_PAGE = 6;

  try {
    connectToDB();
    const count = await User.find({ username: { $regex: regex } }).count();
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEMS_PER_PAGE)
      .skip(ITEMS_PER_PAGE * (page - 1));
    return { count, users };
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch Users!");
  }
};

// Fetching Single User
export const fetchUser = async (id) => {
  try {
    connectToDB();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch a User!");
  }
};

// Fetching all Products
export const fetchProducts = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEMS_PER_PAGE = 6;

  try {
    connectToDB();
    const count = await Product.find({ title: { $regex: regex } }).count();
    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEMS_PER_PAGE)
      .skip(ITEMS_PER_PAGE * (page - 1));
    return { count, products };
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch Prodcuts!");
  }
};

// Fetching Single Product

export const fetchProduct = async (id) => {
  try {
    connectToDB();
    const product = await Product.findById(id);
    return product;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch a Product!");
  }
};
