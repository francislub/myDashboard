"use server";

import { revalidatePath } from "next/cache";
import { Child, Product, User } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { signIn } from "../auth";

export const addUser = async (formData) => {
  const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      phone,
      address,
      isAdmin,
      isActive,
    });

    await newUser.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create user!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const updateUser = async (formData) => {
  const { id, username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      username,
      email,
      password,
      phone,
      address,
      isAdmin,
      isActive,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await User.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update user!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const addChild = async (formData) => {
  const { name, studentID, gender, age, ekibiina, nationality, parentStatus, levelOfNeed, yearsLeftToGraduate, description } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const newChild = new Child({
      name,
      studentID,
      gender,
      age,
      ekibiina,
      nationality,
      parentStatus,
      levelOfNeed,
      yearsLeftToGraduate,
      description
    });

    await newChild.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create product!");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const updateChild = async (formData) => {
  const { name, studentID, gender, age, ekibiina, nationality, parentStatus, levelOfNeed, yearsLeftToGraduate, description } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      name,
      studentID,
      gender,
      age,
      ekibiina,
      nationality,
      parentStatus,
      levelOfNeed,
      yearsLeftToGraduate,
      description
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await Child.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update child!");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await User.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete user!");
  }

  revalidatePath("/dashboard/products");
};

export const deleteChild = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await Child.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete child!");
  }

  revalidatePath("/dashboard/products");
};

export const authenticate = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    if (err.message.includes("CredentialsSignin")) {
      return "Wrong Credentials";
    }
    throw err;
  }
};