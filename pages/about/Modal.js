import Modal from "react-modal";
import { AiFillCloseCircle } from "react-icons/ai";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
    height: "80%",
    width: "60%",
    position: "relative",
    overflow: "none",
    paddingY: "20px",
  },
};

const ModalComponent = ({ closeModal, isOpen, title, children }) => (
  <div>
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <AiFillCloseCircle
        style={{
          height: "50px",
          width: "50px",
          position: "absolute",
          top: "-30px",
          right: "-30px",
          cursor: "pointer",
        }}
        onClick={closeModal}
      >
        close
      </AiFillCloseCircle>
      <div className="flex flex-col">
        <p className="text-black font-bold text-2xl">{title}</p>
        <div className="mt-8">{children}</div>
      </div>
    </Modal>
  </div>
);

export default ModalComponent;
