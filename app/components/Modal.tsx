interface ModalProps {
    modalOpen: boolean;
    setModalOpen: (open : boolean) => boolean | void;
    children: React.ReactNode
}

const modal: React.FC<ModalProps> = ({ modalOpen, setModalOpen, children}) => {
  return (
    <div className={`modal ${modalOpen ? "modal-open" : ""}`} role="dialog">
  <div className="modal-box realtive">
    
    <div className="modal-action">
      <label onClick={() => setModalOpen(false)}
       className="btn btn-sm btn-circle absolute right-2 top-2">Close!</label>
    </div>
    {children}
  </div>
</div>
  );
};

export default modal;