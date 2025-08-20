import axiosInstance from "./axiosInstance";

const fetchUser = async (email: string) => {
    try {
        const res = axiosInstance.post("/api/user", email);
        console.log(res);

        return res;
    } catch (error: unknown) {
        console.log("Error:", error instanceof Error ? error.message : String(error) || "Error while fetching user");
    }
}

export default fetchUser;