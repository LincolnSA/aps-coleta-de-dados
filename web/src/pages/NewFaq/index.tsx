import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { Textarea } from "../../components/Textarea";
import { Title } from "../../components/Title";
import { Spinner } from "../../components/Spinner";

const NewFaq = () => {
  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");
  const [loading, setLoading] = useState(true);

  const navigation = useNavigate();

  const isAdmin = localStorage.getItem("userAdmin") === "true";

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, []);

  const handleSubmitForm = async (event: FormEvent) => {
    event.preventDefault();

    await api.post(
      "faqs",
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

    setQuestion("");
    setAnswer("");
    alert("FAQ cadastrada com sucesso!");
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
          <Title>Nova FAQ</Title>
          <Textarea label="Pergunta" value={question} setValue={setQuestion} />

          {isAdmin && (
            <Textarea label="Resposta" value={answer} setValue={setAnswer} />
          )}

          <div className="mb-3 d-grid">
            <button type="submit" className="btn btn-success">
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export { NewFaq };
