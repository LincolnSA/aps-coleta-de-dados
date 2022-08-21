import { FormEvent } from "react";
import { api } from "../../services/api";
import { Textarea } from "../Textarea";

const DeleteFaqModal = ({ faq }: any) => {
  const handleSubmitForm = async (event: FormEvent) => {
    event.preventDefault();

    await api.get(`faqs/${faq.id}/delete`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    });

    location.reload();
  };

  return (
    <div
      className="modal fade"
      id="delete-faq-modal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Deletar FAQ
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmitForm} id="delete-faq">
              <Textarea label="Pergunta" value={faq?.question} disable />
              <Textarea label="Resposta" value={faq?.answer} disable />
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-outline-secondary"
              data-bs-dismiss="modal"
            >
              Cancelar
            </button>
            <button type="submit" className="btn btn-danger" form="delete-faq">
              Deletar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export { DeleteFaqModal };
