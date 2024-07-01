import Modal from "react-modal";

const ConfirmationModal = ({ isOpen, onRequestClose, onConfirm }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      contentLabel="Confirmation Modal"
      className=""
      overlayClassName=""
    >
      <h2 className="text-lg font-bold mb-4">Delete Account</h2>
      <p className="mb-4">Are you sure you want to delete your account?</p>
      <div className="flex justify-end">
        <button
          className="bg-red-500 text-white px-4 py-2 mr-2 rounded"
          onClick={onConfirm}
        >
          Yes
        </button>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded"
          onClick={onRequestClose}
        >
          No
        </button>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;

// TEST
// const ConfirmationModal = ({ setIsOpen, onConfirm }) => {
//   return (
//     <div className="">
//       <div className="">
//         <h2>Delete Account</h2>
//         <p>Are you sure you want to delete your account?</p>
//         <div className="modalButtons">
//           <button onClick={onConfirm}>Yes</button>
//           <button onClick={() => setIsOpen(false)}>No</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ConfirmationModal;
