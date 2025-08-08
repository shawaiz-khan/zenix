import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["admin", "user"], default: "user" },
    favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: "Event" }], // array of events
    authToken: { type: String, default: "" }
}, { timestamps: true });

const UserModel = mongoose.models.User || mongoose.model("User", UserSchema);

export default UserModel;