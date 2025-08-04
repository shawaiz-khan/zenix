import { toast } from "react-toastify";

const notify = (message: string) => {
    toast(message, {
        className: "max-w-60 mr-3 my-3 md:mr-0 md:my-0 md:max-w-full",
    });
};

export default notify;