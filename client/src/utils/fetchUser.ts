import axiosInstance from "./axiosInstance";

const fetchUser = async (username: string) => {
    try {
        const res = await axiosInstance.post("/api/auth/user/me", username);
        return res.data.user;
    } catch (error: unknown) {
        console.log("Error:", error instanceof Error ? error.message : String(error) || "Error while fetching user");
    }
}

export default fetchUser;