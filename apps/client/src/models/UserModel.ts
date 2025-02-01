import mongoose, { Query } from "mongoose";
import validator from "validator";
import bcryptjs from "bcryptjs";
import crypto from "crypto";

// importing interfaces
import IUser from "@/lib/interface/IUser";

const userSchema = new mongoose.Schema({
  name: String,

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

  passwordResetToken: String,
  PassswordResetExpires: Date,
});

// used to hash the passwords
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  // hash the password
  this.password = await bcryptjs.hash(this.password, 12);
  next();
});

// for storing when the password has changed to expire the password reset token
userSchema.pre("save", function (next) {
  if (!this.isModified("password") || this.isNew) return next();

  this.passwordChangedAt = new Date(Date.now() - 1000);
  // sometimes the new Token is generated way too soon before the timestamp for password change is created so we need to subtract some time from that timestamp
  next();
});

// to check if the password is correct or not
userSchema.methods.correctPassword = async function (
  password: string,
  actualPassword: string
) {
  return await bcryptjs.compare(password, actualPassword);
};

// create password reset token return it and also assign date for password reset expires
userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");

  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.PassswordResetExpires = Date.now() + 10 * 60 * 1000; // this is 10 minutes

  return resetToken;
};

userSchema.pre(/^find/, function (this: Query<IUser, IUser>, next) {
  this.find({ active: { $ne: false } }); // this is the middleware that will run before every find query and it will pass an extra query in which active must be true or not equals false
  next();
});

// defining model and exporting it
let Users;

try {
  Users = mongoose.model("Users"); // Try to get the model if it already exists
} catch (error) {
  Users = mongoose.model("Users", userSchema); // If not, define it
  console.log(error);
}
export default Users;
