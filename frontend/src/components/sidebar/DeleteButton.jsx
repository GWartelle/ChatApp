import { BiTrash } from "react-icons/bi";
import useDelete from "../../hooks/useDelete";

const DeleteButton = () => {
  const { loading, deleteAccount } = useDelete();

  return (
    <div className="mt-auto">
      {!loading ? (
        <BiTrash
          className="w-6 h-6 text-white cursor-pointer"
          title="Delete Account"
          onClick={deleteAccount}
        />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};

export default DeleteButton;
