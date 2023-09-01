import { styled } from "styled-components";

const Message = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: crimson;
  margin-top: 5px;
`;

export const ErrorMesaage = ({ text }) => {
  return <Message>{text}</Message>;
};
