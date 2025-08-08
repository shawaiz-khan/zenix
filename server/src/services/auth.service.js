import { UserModel } from "../models/index.js"
import { hash_generator } from "../utils/index.js"

export const createNewUser = async (user) => {
    try {
        const isExistingUser = await UserModel.findOne({ email: user.email })

        if (isExistingUser) {
            throw new Error("User already exists");
        }

        const hashedPassword = await hash_generator(user.password);
        console.log(hashedPassword)

        const newUser = await UserModel.create({
            username: user.username,
            email: user.email,
            password: user.password,
            role: user.role,
            favorites: user.favorites,
            authToken: user.authToken
        });

        return newUser;
    } catch (error) {
        throw new Error(error.message || "User cannot be registered at the moment")
    }
}