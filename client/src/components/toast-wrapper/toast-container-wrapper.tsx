import { useTheme } from "@/hooks";
import { ToastContainer } from "react-toastify";

const ToastContainerWrapper: React.FC = () => {
  const { theme } = useTheme();

  return (
    <ToastContainer
      position="bottom-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      pauseOnFocusLoss
      draggable
      pauseOnHover={false}
      theme={theme === "dark" ? "light" : "dark"}
    />
  );
};

export default ToastContainerWrapper;