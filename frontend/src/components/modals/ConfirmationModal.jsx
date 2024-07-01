import Modal from "react-modal";

Modal.setAppElement("#root");

Modal.defaultStyles.overlay = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "#525e72c0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

Modal.defaultStyles.content = {
  textAlign: "center",
  backgroundColor: "#cbd5e000",
  backgroundClip: "padding-box",
  backdropFilter: "blur(10px)",
  overflow: "hidden",
  WebkitOverflowScrolling: "touch",
  borderRadius: "0.5rem",
  outline: "1px solid #e5e7eb",
  padding: "1rem",
};

const ConfirmationModal = ({ isOpen, onRequestClose, onConfirm }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Confirmation Modal"
    >
      <h2 className="text-xl font-bold mb-4 text-gray-200">Delete Account</h2>
      <p className="text-lg font-semibold mb-4 text-gray-300">
        Are you sure you want to delete your account?
      </p>
      <div className="flex justify-evenly">
        <button
          className="btn w-5/12 btn-sm mt-2 border border-slate-700 hover:text-white"
          onClick={onRequestClose}
        >
          No
        </button>
        <button
          className="btn w-5/12 btn-sm mt-2 border border-slate-700 hover:bg-red-700 hover:border-red-700 hover:text-white"
          onClick={onConfirm}
        >
          Yes
        </button>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
