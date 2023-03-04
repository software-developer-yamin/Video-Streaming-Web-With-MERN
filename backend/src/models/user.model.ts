import { InferSchemaType, Schema, model, Document } from "mongoose";
import validator from "validator";
import { sign } from "jsonwebtoken";
import { compare, hash } from "bcrypt";
import * as crypto from "crypto";

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: [true, "Please enter your full name"],
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
      unique: true,
      validate: validator.isEmail,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],
      minLength: [6, "Password must be at least 6 characters"],
      select: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    likedMovies: {
      type: Schema.Types.ObjectId,
      ref: "Movie",
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await hash(this.password, 10);
  next();
});

userSchema.methods.getJWTToken = async function () {
  return sign({ _id: this._id }, process.env.JWT_SECRET!, {
    expiresIn: "15d",
  });
};

userSchema.methods.comparePassword = async function (password: string) {
  return await compare(password, this.password);
};

userSchema.methods.getResetToken = async function () {
  const resetToken = crypto.randomBytes(20).toString("hex");
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;
  return resetToken;
};

interface IUserDocument extends InferSchemaType<typeof userSchema>, Document {
  comparePassword: (password: string) => Promise<boolean>;
  getJWTToken: () => Promise<string>;
  getResetToken: () => Promise<string>;
}

export default model<IUserDocument>("User", userSchema);
