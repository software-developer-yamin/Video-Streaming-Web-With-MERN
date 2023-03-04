import asyncHandler from "express-async-handler";
import { Request, Response, NextFunction } from "express";
import userModel from "../models/user.model";
import createHttpError from "http-errors";

interface IRegisterReqBody {
  fullName: string;
  email: string;
  password: string;
  image?: string;
}

export const registerUser = asyncHandler<
  unknown,
  unknown,
  IRegisterReqBody,
  unknown
>(async (req, res, next) => {
  const { password, image, email, fullName } = req.body;

  if (!fullName || !email || !password) {
    throw createHttpError(400, "Please enter all field");
  }

  try {
    const userExists = await userModel.findOne({ email });

    if (userExists) {
      throw createHttpError(409, "User Already Exists");
    }

  } catch (error) {}
});
