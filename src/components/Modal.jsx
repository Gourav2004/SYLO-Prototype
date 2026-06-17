import { useApp } from '../context/useApp';

export default function Modal() {
  const { modal, closeModal } = useApp();
  if (!modal) return null;

  return (
    <div
      className="modal-overlay show"
      onClick={(e) => e.target === e.currentTarget && closeModal()}
    >
      <div className="modal">
        <div className="modal-head">
          <div className="modal-title">{modal.title}</div>
          <button type="button" className="modal-close" onClick={closeModal}>
            ×
          </button>
        </div>
        <div className="modal-body">{modal.body}</div>
        {modal.footer && <div className="modal-footer">{modal.footer}</div>}
      </div>
    </div>
  );
}
