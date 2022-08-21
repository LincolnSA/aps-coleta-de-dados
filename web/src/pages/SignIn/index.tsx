import { FormEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { Input } from "../../components/Input";
import { Title } from "../../components/Title";
import { Spinner } from "../../components/Spinner";

import QuestionsLogo from "../../assets/questions.svg";

const SignIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState(true);

  const navigation = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  const handleSubmitForm = async (event: FormEvent) => {
    event.preventDefault();

    const response = await api.post("/login", {
      email,
      password,
    });

    if (!response.data.success) {
      return alert("Email/Senha incorretos ou usuário não cadastrado!");
    }

    localStorage.setItem("userName", response.data.name);
    localStorage.setItem("userAdmin", response.data.admin);
    localStorage.setItem("userToken", response.data.token);

    navigation("/home");
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="row container mx-auto" style={{ height: "100vh" }}>
      <div className=" col-sm-12 col-md-6 align-items-center d-none d-md-flex ">
        <img src={QuestionsLogo} alt="Question logo" className="img-fluid" />
      </div>
      <div className=" col-sm-12 col-md-6 d-flex align-items-center">
        <form className="w-100" onSubmit={handleSubmitForm}>
          <Title>
            Bem vindo ao <br /> APS - Coleta de dados
          </Title>

          <Input label="E-mail" type="text" value={email} setValue={setEmail} />

          <Input
            label="Senha"
            type="password"
            value={password}
            setValue={setPassword}
          />

          <div className="mb-3 d-grid gap-2">
            <button type="submit" className="btn btn-success">
              Entrar
            </button>

            <Link to="/sign-up" className="btn btn-outline-secondary">
              Cadastrar
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export { SignIn };
