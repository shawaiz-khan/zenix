import { UserModel } from "../models/index.js"
import { JwtHelpers, BcryptHelpers } from "../utils/index.js"

export const createNewUser = async (userData) => {
    try {
        const isExistingUser = await UserModel.findOne({ email: userData.email })

        if (isExistingUser) {
            throw new Error("User already exists");
        }

        const hashedPassword = await BcryptHelpers.hash_generator(userData.password);

        const userTokenData = {
            username: userData.username,
            email: userData.email,
            role: userData.role
        };

        const accessToken = await JwtHelpers.create_tokens(userTokenData, "access");
        const refreshToken = await JwtHelpers.create_tokens(userTokenData, "refresh");

        const newUser = await UserModel.create({
            username: userData.username,
            email: userData.email,
            password: hashedPassword,
            role: userData.role,
            favorites: userData.favorites,
            authToken: refreshToken
        });

        return { newUser, accessToken, refreshToken };
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

        const verifyPassword = await BcryptHelpers.hash_verifier(userData.password, userFound.password);

        if (!verifyPassword) {
            throw new Error("Passwords do not match")
        }

        const userTokenData = {
            username: userData.username,
            email: userData.email,
            role: userData.role
        };

        const accessToken = await JwtHelpers.create_tokens(userTokenData, "access");
        const refreshToken = await JwtHelpers.create_tokens(userTokenData, "refresh");

        return { userFound, accessToken, refreshToken };
    } catch (error) {
        throw new Error(error.message || "Cannot login the user at this moment")
    }
}