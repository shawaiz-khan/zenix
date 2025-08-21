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
            username: userFound.username,
            email: userFound.email,
            role: userFound.role
        };

        const accessToken = await JwtHelpers.create_tokens(userTokenData, "access");
        const refreshToken = await JwtHelpers.create_tokens(userTokenData, "refresh");

        userFound.authToken = refreshToken;
        await userFound.save();

        return { userFound, accessToken, refreshToken };
    } catch (error) {
        throw new Error(error.message || "Cannot login the user at this moment")
    }
}

export const getUserData = async (username) => {
    try {
        const user = await UserModel.findOne({ username });
        return user;
    } catch (error) {
        throw new Error(error.message || "Cannot get the user data")
    }
}

export const refreshAccessToken = async (refreshToken) => {
    try {
        const verify = await JwtHelpers.verify_tokens(refreshToken, "refresh");

        if (!verify) {
            throw new Error("Invalid refresh token");
        }

        const user = await UserModel.findOne({ email: verify.email });

        if (!user) {
            throw new Error("User not found")
        };

        const dbRefreshToken = user.authToken;

        if (refreshToken !== dbRefreshToken) {
            throw new Error("The authentication tokens do not match");
        }

        const userData = { username: user.username, email: user.email, role: user.role }
        const accessToken = await JwtHelpers.create_tokens(userData, "access");

        return accessToken;
    } catch (error) {
        throw new Error(error.message || "Cannot refresh the access token");
    }
}