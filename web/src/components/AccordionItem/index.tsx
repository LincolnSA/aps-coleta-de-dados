import { Link } from "react-router-dom";

const AccordionItem = ({ faq, setFaqActive }: any) => {
  const isAdmin = localStorage.getItem("userAdmin") === "true";

  return (
    <>
      <div className="accordion-item ">
        <h2 className="accordion-header" id={`flush-heading-${faq.id}`}>
          <button
            className="accordion-button collapsed "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#flush-collapse-${faq.id}`}
            aria-expanded="false"
            aria-controls={`flush-collapse-${faq.id}`}
          >
            {faq.question}

            {!faq.answer.length && (
              <span
                className="position-absolute  start-0 translate-middle p-2 bg-warning border border-light rounded-pill"
                title="Aguardando resposta"
                data-bs-toggle="tooltip"
              ></span>
            )}
          </button>
        </h2>
        <div
          id={`flush-collapse-${faq.id}`}
          className="accordion-collapse collapse"
          aria-labelledby={`flush-heading-${faq.id}`}
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body text-center">
            <div className="text-start">
              {isAdmin ? (
                <>
                  <p className="p-0 m-0">
                    <b>Nome: </b>
                    {faq.user.name}
                  </p>
                  <p className="p-0 m-0">
                    <b>E-mail: </b>
                    {faq.user.email}
                  </p>
                  <p className="p-0 m-0">
                    <b>Resposta: </b>
                    {faq.answer}
                  </p>
                </>
              ) : (
                <p className="p-0 m-0">
                  <b>Resposta: </b>
                  {faq.answer}
                </p>
              )}
            </div>
            <div
              className="btn-group btn-group-sm mt-3"
              role="group"
              aria-label="Basic outlined example"
            >
              {isAdmin ? (
                <Link
                  to={`/faqs/${faq.id}`}
                  type="button"
                  className="btn btn-outline-success"
                >
                  Editar
                </Link>
              ) : (
                !faq.answer.length && (
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    data-bs-toggle="modal"
                    data-bs-target="#delete-faq-modal"
                    onClick={() => setFaqActive(faq)}
                  >
                    Deletar
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export { AccordionItem };
