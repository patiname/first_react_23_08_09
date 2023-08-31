import { styled } from "styled-components";
import { contents } from "../apiEx";

const Wrap = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Con = styled.div`
  width: 30%;
`;

const Bg = styled.div`
  height: 350px;
  background: url(${(props) => props.imgurl}) no-repeat center / cover;
`;

const Title = styled.h3``;

const Desc = styled.p``;

export const CardUi = () => {
  return (
    <div>
      <Wrap>
        {contents.map((con) => (
          <Con key={con.id}>
            <Bg imgurl={con.imgUrl} />
            <Title>{con.title}</Title>
            <Desc>{con.desc}</Desc>
          </Con>
        ))}
      </Wrap>
    </div>
  );
};
