import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      lowercase: true,
      index: true,
      unique: true
    },
    username: {
      type: String,
      required: true,
      index: true,
      unique: true
    }
  },
  { timestamps: true }
);

schema.methods.userDetails = function userDetails() {
  return {
    email: this.email,
    username: this.username
  };
};

export default mongoose.model("User", schema);
