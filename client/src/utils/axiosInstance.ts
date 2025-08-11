import axios from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    withCredentials: true,
});

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const prevReq = error?.config;

        if (error?.response?.status === 401 && !prevReq?.sent) {
            prevReq.sent = true;

            try {
                const res = await axiosInstance.post("/api/auth/refresh");

                prevReq.headers["Authorization"] = `Bearer ${res.data.accessToken}`;
                return axiosInstance(prevReq);
            } catch (refreshError) {
                console.error("Refresh Token Failed:", refreshError);
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
)

export default axiosInstance;