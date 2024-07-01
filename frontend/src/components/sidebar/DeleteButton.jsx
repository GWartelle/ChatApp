import { useState } from "react";
import { BiTrash } from "react-icons/bi";
import useDelete from "../../hooks/useDelete";
import ConfirmationModal from "../modals/ConfirmationModal";

const DeleteButton = () => {
  const { loading, deleteAccount } = useDelete();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDeleteAccount = () => {
    deleteAccount();
    setIsModalOpen(false);
  };

  return (
    <div>
      {!loading ? (
        <BiTrash
          className="w-6 h-6 text-white cursor-pointer"
          title="Delete Account"
          onClick={() => setIsModalOpen(true)}
        />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
      <ConfirmationModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        onConfirm={handleDeleteAccount}
      />
    </div>
  );
};

export default DeleteButton;
