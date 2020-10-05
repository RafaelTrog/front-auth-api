import styled from "styled-components";

export const FormContainer = styled.form`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  width: 500px;
  // height: 500px;
  border-radius: 10px;
  padding: 30px 20px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #202030;
`;

export const StyledInput = styled.div`
  // width: 200px;
  height: 80px;
  overflow: hidden;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: middle;
  color: #fff;
  font-family: sans-serif;
  font-size: 20px;
  border: 2px solid #202030;

  & div {
    background-color: rgba(255, 255, 255, 0.1);
    height: 100%;
    width: 130px;
    display: flex;
    padding: 0 20px;
    align-items: center;
    user-select: none;
  }

  & input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    font-size: 20px;
    padding-left: 20px;
  }
`;

export const ConfirmBtn = styled.button`
    height: 80px;
    border-radius: 10px;
    width: 100%:
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #119e76;
    font-size: 20px;
    outline: none;
    user-select: none;
    border: none;
    color: #fff;
    cursor: pointer;

    &:hover {
        background-color: #13ba8b;
    }
`;

export const Title = styled.div`
  font-size: 30px;
  color: #fff;
  font-family: sans-serif;
  font-weight: bold;
`;

export const LoginErro = styled.p`
  background-color: #ba2f13;
  border-radius: 10px;
  padding: 10px;
  position: absolute;
  font-family: sans-serif;
  color: #fff;
  font-weight: bold;
  top: 105%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
