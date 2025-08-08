import bcrypt from "bcrypt";

export const hash_generator = async (text) => {
    try {
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);

        const hash = await bcrypt.hash(text, salt);
        return hash;
    } catch (error) {
        throw new Error("Cannot hash the given data");
    }
}

export const hash_verifier = async (text, hashedText) => {
    try {
        const verify = await bcrypt.compare(text, hashedText)
        return verify;
    } catch (error) {
        throw new Error("Cannot verify the given data")
    }
}