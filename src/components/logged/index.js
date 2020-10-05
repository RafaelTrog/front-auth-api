import React from "react";
import { logout } from "../Auth";
import { useHistory } from "react-router-dom";

import { FormContainer, Container, ConfirmBtn, Title } from "../styles";

export default () => {
  const history = useHistory();

  const handleLogout = () => {
    logout();
    history.push("/");
  };

  return (
    <Container>
      <FormContainer>
        <Title>YOU'RE LOGGED IN</Title>
        <ConfirmBtn type="submit" onClick={handleLogout}>SIGN OUT</ConfirmBtn>
      </FormContainer>
    </Container>
  );
};
