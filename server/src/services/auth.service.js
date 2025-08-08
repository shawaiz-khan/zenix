import { UserModel } from "../models/index.js"
import { hash_generator, hash_verifier } from "../utils/index.js"

export const createNewUser = async (userData) => {
    try {
        const isExistingUser = await UserModel.findOne({ email: userData.email })

        if (isExistingUser) {
            throw new Error("User already exists");
        }

        const hashedPassword = await hash_generator(userData.password);

        const newUser = await UserModel.create({
            username: userData.username,
            email: userData.email,
            password: hashedPassword,
            role: userData.role,
            favorites: userData.favorites,
            authToken: userData.authToken
        });

        return newUser;
    } catch (error) {
        throw new Error(error.message || "User cannot be registered at the moment")
    }
}

export const loginExistingUser = async (userData) => {
    try {
        const userFound = await UserModel.findOne({ email: userData.email })

        if (!userFound) {
            throw new Error("User does not exists");
        }

        const verifyPassword = await hash_verifier(userData.password, userFound.password);

        if (!verifyPassword) {
            throw new Error("Passwords do not match")
        }

        return userFound;
    } catch (error) {
        throw new Error(error.message || "Cannot login the user at this moment")
    }
}