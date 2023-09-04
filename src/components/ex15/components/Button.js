import { styled } from "styled-components";

const SButton = styled.button`
  all: unset;
  width: 100%;
  height: 50px;
  border-radius: 5px;
  text-align: center;
  color: white;
  margin-top: 20px;
  font-weight: 600;
  background-color: coral;
  box-sizing: border-box;
  cursor: pointer;
  opacity: ${(props) => (props.$isActive ? 1 : 0.5)};
`;

export const Button = ({ isValid, text }) => {
  return <SButton $isActive={isValid}>{text}</SButton>;
};
