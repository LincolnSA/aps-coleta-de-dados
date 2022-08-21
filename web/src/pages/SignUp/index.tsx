import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";
import { Title } from "../../components/Title";
import { api } from "../../services/api";

const SignUp = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigation = useNavigate();

  const handleSubmitForm = async (event: FormEvent) => {
    event.preventDefault();

    const itsInstitutional = email.toLowerCase().includes("@aluno.ifce.edu.br");

    if (!itsInstitutional) {
      return alert("Cadastra-se com o e-mail institucional");
    }

    const response = await api.post("/users", {
      name,
      email: email.toLowerCase(),
      password,
    });

    if (!response.data.success) {
      return alert("Usuário já cadastrado!");
    }

    handleGoBack();
  };

  const handleGoBack = () => {
    navigation("/");
  };

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
          <Title>Cadastrar</Title>

          <p className="mt-3 text-muted">
            Se cadastrando você nos ajuda a coletar perguntas frequentes - FAQs
            de uma Instituição de ensino superior - IES, para melhorar o repasse
            de informações necessárias.
          </p>

          <Input label="Nome" type="text" value={name} setValue={setName} />

          <Input
            label="E-mail"
            type="text"
            value={email}
            setValue={setEmail}
            placeholder="Seu e-mail institucional"
          />

          <Input
            label="Senha"
            type="password"
            value={password}
            setValue={setPassword}
          />

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

export { SignUp };
