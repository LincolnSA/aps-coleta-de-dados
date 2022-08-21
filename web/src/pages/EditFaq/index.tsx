import { FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Spinner } from "../../components/Spinner";
import { Textarea } from "../../components/Textarea";
import { Title } from "../../components/Title";
import { api } from "../../services/api";

const EditFaq = () => {
  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const navigation = useNavigate();
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    (async () => {
      const response = await api.get(`/faqs/${id}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });

      setQuestion(response.data.question);
      setAnswer(response.data.answer);
      setLoading(false);
    })();
  }, []);

  const handleSubmitForm = async (event: FormEvent) => {
    event.preventDefault();

    const response = await api.post(
      `/faqs/${id}/edit`,
      {
        question,
        answer,
      },
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      }
    );

    setQuestion(response.data.question);
    setAnswer(response.data.answer);

    alert("FAQ atualizada com sucesso!");
  };

  const handleGoBack = () => {
    navigation("/home");
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <button
        type="button"
        className="btn btn-sm btn-outline-success  ms-2 mt-2 d-flex align-items-center justify-contents-center"
        onClick={handleGoBack}
      >
        <span className="material-symbols-outlined">arrow_back</span>
      </button>

      <div className="row container mx-auto mt-5" style={{ maxWidth: 600 }}>
        <form onSubmit={handleSubmitForm}>
          <Title>Editar FAQ</Title>
          <Textarea label="Pergunta" value={question} setValue={setQuestion} />
          <Textarea label="Resposta" value={answer} setValue={setAnswer} />

          <div className="mb-3 d-grid">
            <button type="submit" className="btn btn-success">
              Salvar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export { EditFaq };
