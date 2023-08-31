import { styled } from "styled-components";

const Box = styled.div`
  width: ${props => props.w * 1.5};
  height: ${props => props.h};
  background-color: ${props => props.bgColor};
  margin-bottom: 30px;
  display: ${props => props.show};
`;

export const StyledEx01 = () => {
  return (
    <div>
      <Box w="300px" h="500px" bgColor="darkmagenta"></Box>
      <Box show="none" w="100px" h="200px" bgColor="orange"></Box>
    </div>
  );
};




