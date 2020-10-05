import React, { useState } from "react";
import axios from "axios";
import { login } from "../Auth";
import { useHistory } from "react-router-dom";

import {
  FormContainer,
  Container,
  StyledInput,
  ConfirmBtn,
  Title,
  LoginErro
} from "../styles";

export default () => {
  const [user, setUser] = useState();
  const [password, setPassword] = useState();
  const [notUser, setNotUser] = useState(false);
  const [notPass, setNotPass] = useState(false);
  const [invalidCredentials, setInvalidCredentials] = useState(false);

  const history = useHistory();

  const getLogin = async () => {
    const config = {
      method: "post",
      url: "http://localhost:3000/auth/authenticate",
      headers: {
        "content-type": "application/json",
      },
      data: {
        email: user,
        password: password,
      },
    };

    try {
      const res = await axios(config);

      login(res.data.token);
      history.push("/projetos");
    } catch (error) {
      setInvalidCredentials(true);
    }
  };

  const handleUser = (event) => {
    setUser(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (user && password) {
      getLogin();
    }

    if (!user && !password) {
      setNotUser(true);
      setNotPass(true);
    } else if (!user) {
      setNotUser(true);
      setNotPass(false);
    } else if (!password) {
      setNotPass(true);
      setNotUser(false);
    } else {
      setNotPass(false);
      setNotUser(false);
      getLogin();
    }
  };

  const handleErrorLogin = () => {
    if (notUser && notPass) {
      return <LoginErro>Usuário e senha em branco!</LoginErro>;
    } else if (notPass) {
      return <LoginErro>Senha em branco!</LoginErro>;
    } else if (notUser) {
      return <LoginErro>Usuário em branco!</LoginErro>;
    } else if (invalidCredentials) {
      return <LoginErro>Credenciais inválidas!</LoginErro>;
    } else {
      return null;
    }
  };

  return (
    <Container>
      <FormContainer onSubmit={handleSubmit}>
        <Title>Login</Title>
        <StyledInput>
          <div>Email</div>
          <input type="text" placeholder="name@email.com" onChange={handleUser} />
        </StyledInput>
        <StyledInput>
          <div>Password</div>
          <input type="password" placeholder="**************" onChange={handlePassword} />
        </StyledInput>
        <ConfirmBtn type="submit">SIGN IN</ConfirmBtn>
        {handleErrorLogin()}
      </FormContainer>
    </Container>
  );
};
