import mongoose, { Schema, Model } from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import { QueryWithHelpers } from "mongoose";

import IUserModel from "@/lib/interface/IUser";

const userSchema = new Schema<IUserModel>(
  {
    name: {
      type: String,
    },
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Please enter an email"],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, "Please enter a valid email"],
    },
    password: {
      type: String,
      required: [true, "Please enter a password"],
      minlength: 8,
      select: false,
    },
    passwordChangedAt: {
      type: Date,
      select: false,
    },
    active: {
      type: Boolean,
      default: true,
      select: false,
    },
    passwordResetToken: {
      type: String,
    },
    passwordResetExpires: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

// Hash password before saving
userSchema.pre<IUserModel>("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// Update `passwordChangedAt` timestamp when password changes
userSchema.pre<IUserModel>("save", function (next) {
  if (!this.isModified("password") || this.isNew) return next();

  this.passwordChangedAt = new Date(Date.now() - 1000);
  next();
});

// Filter out inactive users in all queries
userSchema.pre<QueryWithHelpers<IUserModel, IUserModel>>(
  /^find/,
  function (next) {
    this.find({ active: { $ne: false } });
    next();
  }
);

// Check if the provided password is correct
userSchema.methods.correctPassword = async function (
  candidatePassword: string
) {
  return await bcrypt.compare(candidatePassword, this.password);
};

// Create a password reset token
userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");

  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.passwordResetExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

  return resetToken;
};

let Users: Model<IUserModel>;

if (mongoose.models.Users) {
  Users = mongoose.models.Users; // Use the existing model if it already exists
} else {
  Users = mongoose.model<IUserModel>("Users", userSchema); // Otherwise, create a new one
}

export default Users;

// check the docs for why is this case 