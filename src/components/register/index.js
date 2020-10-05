import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';

import {
  FormContainer,
  Container,
  StyledInput,
  ConfirmBtn,
  Title,
} from "../styles";

export default () => {
    const [user, setUser] = useState();
    const [password, setPassword] = useState();
    const [name, setName] = useState();
    const history = useHistory();

    const handleSetUser = (event) => {
        setUser(event.target.value);
    };

    const handleSetPass = (event) => {
        setPassword(event.target.value);
    };
    
    const handleSetName = (event) => {
        setName(event.target.value);
    };

    const handleRedirect = (event) => {
        event.preventDefault();
        getRegister();
    };

    const getRegister = async () => {
        const config = {
          method: "post",
          url: "http://localhost:3000/auth/register",
          headers: {
            "content-type": "application/json",
          },
          data: {
            name: name,
            email: user,
            password: password,
          },
        };
    
        try {
          const res = await axios(config);
          history.push('/');
        } catch (error) {
          alert('Invalid!');
        }
      };


  return (
    <Container>
      <FormContainer onSubmit={handleRedirect}>
        <Title>Register</Title>
        <StyledInput>
          <div>Name</div>
          <input type="text" placeholder="your name" onChange={handleSetName} />
        </StyledInput>
        <StyledInput>
          <div>Email</div>
          <input type="text" placeholder="name@email.com" onChange={handleSetUser} />
        </StyledInput>
        <StyledInput>
          <div>Password</div>
          <input type="password" placeholder="**************" onChange={handleSetPass} />
        </StyledInput>
        <ConfirmBtn type="submit">SIGN UP</ConfirmBtn>
      </FormContainer>
    </Container>
  );
};
