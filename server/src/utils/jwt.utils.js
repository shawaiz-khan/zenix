import jwt from "jsonwebtoken";

class JwtHelpers {
    static async create_tokens(userData, tokenType) {
        try {
            const tokenSecret = tokenType === "access" ? process.env.ACCESS_TOKEN_SECRET : process.env.REFRESH_TOKEN_SECRET;
            const options = {
                algorithm: "HS256",
                expiresIn: tokenType === "access" ? '1h' : '7d'
            };

            const generateToken = jwt.sign(userData, tokenSecret, options);
            return generateToken;
        } catch (error) {
            throw new Error("Cannot create token at the moment");
        }
    }

    static async verify_tokens(token, tokenType) {
        try {
            const tokenSecret = tokenType === "access" ? process.env.ACCESS_TOKEN_SECRET : process.env.REFRESH_TOKEN_SECRET;
            const verifiedToken = jwt.verify(token, tokenSecret);
            return verifiedToken;
        } catch (error) {
            throw new Error("Cannot verify token at the moment");
        }
    }
}

export default JwtHelpers;