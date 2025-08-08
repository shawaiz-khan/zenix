import bcrypt from "bcrypt";

class BcryptHelpers {
    static async hash_generator(text) {
        try {
            const saltRounds = 10;
            const salt = await bcrypt.genSalt(saltRounds);
            return await bcrypt.hash(text, salt);
        } catch (error) {
            throw new Error("Cannot hash the given data");
        }
    }

    static async hash_verifier(text, hashedText) {
        try {
            return await bcrypt.compare(text, hashedText);
        } catch (error) {
            throw new Error("Cannot verify the given data");
        }
    }
}

export default BcryptHelpers;