import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
    isActive: {
      type: Boolean,
      required: true,
      default: false
      },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

// export model user with UserSchema
export default mongoose.model("user", UserSchema);