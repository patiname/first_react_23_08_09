import { styled } from "styled-components";

const SCoverImg = styled.div`
  width: 90%;
  height: 300px;
  background: url(${(props) => props.img}) no-repeat center / cover;
  border-radius: 20px;
  margin: 40px auto 30px auto;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.5);
`;

const Title = styled.div`
  text-align: center;
  h3 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 15px;
  }

  p {
    color: #dbdbdb;
    font-weight: 300;
  }
`;

export const CoverImg = ({ $img }) => {
  return (
    <>
      <SCoverImg img={$img} />

      <Title>
        <h3>Blue bird</h3>
        <p>이동진</p>
      </Title>
    </>
  );
};
