import { styled } from "styled-components";

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 250px;
`;

export const Form = styled.form`
  max-width: 450px;
  width: 100%;
  border: 1px solid #dbdbdb;
  padding: 70px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h3`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 50px;
`;

export const Input = styled.input`
  all: unset;
  box-sizing: border-box;
  border: 1px solid #dbdbdb;
  width: 100%;
  padding: 7px 15px;
  border-radius: 5px;
  margin-top: 10px;
`;
