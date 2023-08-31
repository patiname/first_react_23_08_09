import { styled } from "styled-components";
import { mainColors } from "../../../GlobalStyled";

const SSection = styled.section`
  padding: 100px 20px;
`;

const Title = styled.h3`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 20px;
  color: ${mainColors.fontColor};
`;

const ConWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Con = styled.div`
  width: 45%;
  height: 250px;
  background-color: lightgray;
  &:hover {
    background-color: ${mainColors.pointColor};
  }
  /* =>자기 자신을 선택할땐 &를 사용함  */
`;

export const Section = () => {
  return (
    <SSection>
      <Title>타이틀</Title>

      <ConWrap>
        <Con></Con>
        <Con></Con>
      </ConWrap>
    </SSection>
  );
};
