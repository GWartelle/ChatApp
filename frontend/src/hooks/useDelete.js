import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useDelete = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const deleteAccount = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/auth/delete-account", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) {
        throw new Error("Failed to delete account");
      }

      localStorage.removeItem("chat-user");
      setAuthUser(null);
      toast.success("Successfully deleted account!");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, deleteAccount };
};

export default useDelete;
