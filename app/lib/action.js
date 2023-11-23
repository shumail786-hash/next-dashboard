import { redirect } from "next/navigation.js";
import { connectToDB } from "./database.js";
import { Product, User } from "./models.js";
import bcrypt from "bcrypt";
import { revalidatePath } from "next/cache.js";

export const addUser = async (formData) => {
  "use server";
  const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);
  try {
    connectToDB();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await User({
      username,
      email,
      password: hashedPassword,
      phone,
      address,
      isAdmin,
      isActive,
    });
    await newUser.save();
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create a new user.");
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

//update User

export const updateUser = async (formData) => {
  "use server";
  const { id, username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);
  try {
    connectToDB();
    const updateField = {
      username,
      email,
      password,
      phone,
      address,
      isAdmin,
      isActive,
    };
    Object.keys(updateField).forEach((key) => {
      if (updateField[key] === "" || updateField[key] === undefined)
        delete updateField[key];
    });

    await User.findByIdAndUpdate(id, updateField);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to Update User");
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

// Delete a User
export const deleteUser = async (formData) => {
  "use server";
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await User.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to Delete a User.");
  }
  revalidatePath("/dashboard/users");
};

// Add Product
export const addProduct = async (formData) => {
  "use server";
  const { title, desc, price, stock, color, size, cat } =
    Object.fromEntries(formData);
  try {
    connectToDB();

    const newProduct = await Product({
      title,
      desc,
      price,
      stock,
      color,
      size,
      cat,
    });
    await newProduct.save();
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create a new Product.");
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

// Delete Product
export const deleteProduct = async (formData) => {
  "use server";
  const { id } = Object.fromEntries(formData);
  try {
    connectToDB();
    await Product.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to Delete a Product.");
  }
  revalidatePath("/dashboard/products");
};

// Update Product
export const updateProduct = async (formData) => {
  "use server";
  const { id, title, price, stock, color, size, cat, desc } =
    Object.fromEntries(formData);
  try {
    connectToDB();
    const updateField = {
      title,
      price,
      stock,
      color,
      size,
      cat,
      desc,
    };
    Object.keys(updateField).forEach((key) => {
      if (updateField[key] === "" || updateField[key] === undefined)
        delete updateField[key];
    });
    await Product.findByIdAndUpdate(id, updateField);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to Update a Product.");
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};
