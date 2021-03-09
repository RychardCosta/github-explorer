import React, { useState, FormEvent, useEffect } from "react";
import { Link } from "react-router-dom";

import { FiChevronRight } from "react-icons/fi";

import { Title, Form, Repositories, Error } from "./styled";

import Logo from "../../assets/app_logo.svg";

import api from "../../services/api";

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [searcTerm, setSearcTerm] = useState("");
  const [inputError, setIputError] = useState("");
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem(
      "@GithubExplorer:repositories",
    );

    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      "@GithubExplorer:repositories",
      JSON.stringify(repositories),
    );
  }, [repositories]);

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!searcTerm) {
      setIputError("Digite o autor/nome do repositório");
    }
    try {
      const response = await api.get<Repository>(`/repos/${searcTerm}`);

      const repository = response.data;
      setRepositories([...repositories, repository]);
      setSearcTerm("");
      setIputError("");
    } catch (err) {
      setIputError("Erro na busca desse repositório");
    }
  }

  return (
    <>
      <img src={Logo} alt="Logo" />
      <Title>Explore repositórios do GitHub</Title>;
      <Form onSubmit={handleSubmit}>
        <input
          onChange={event => setSearcTerm(event.target.value)}
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>
      {inputError && <Error>{inputError}</Error>}
      <Repositories>
        {repositories.map(repository => (
          <Link
            key={repository.full_name}
            to={`/repository/${repository.full_name}`}
          >
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}/</strong>
              <p>{repository.description}</p>
            </div>

            <FiChevronRight size={20} />
          </Link>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
