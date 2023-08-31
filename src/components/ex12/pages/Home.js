import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { mainColors } from "../../../GlobalStyled";
import { data } from "../api";

const Banner = styled.section`
  height: 800px;
  background: url(https://wallpapers.com/images/hd/abstract-background-6m6cjbifu3zpfv84.jpg)
    no-repeat center / cover;
`;

const Section = styled.section`
  padding: 150px 20%;
  display: flex;
  justify-content: space-between;
  a {
    width: 45%;
    height: 500px;
  }
`;

const Con = styled.div`
  height: inherit;
  background: url(${(props) => props.$bgUrl}) no-repeat center / cover;
`;

export const Home = () => {
  return (
    <div>
      <Banner></Banner>

      <Section>
        {/* <Link to={"/sub/0"}>
          <Con $bgUrl="https://img.freepik.com/premium-photo/abstract-background-images-wallpaper-ai-generated_643360-12868.jpg?w=2000"></Con>
        </Link>
        <Link to={"/sub/1"}>
          <Con $bgUrl="https://media.istockphoto.com/id/1248542684/vector/abstract-blurred-colorful-background.jpg?s=612x612&w=0&k=20&c=6aJX8oyUBsSBZFQUCJDP7KZ1y4vrf-wEH_SJsuq7B5I="></Con>
        </Link>
        <Link to={"/sub/2"}>
          <Con $bgUrl="https://media.istockphoto.com/id/1248542684/vector/abstract-blurred-colorful-background.jpg?s=612x612&w=0&k=20&c=6aJX8oyUBsSBZFQUCJDP7KZ1y4vrf-wEH_SJsuq7B5I="></Con>
        </Link> */}
        {data.map((con) => (
          <Link to={`/sub/${con.id}`} key={con.id}>
            <Con $bgUrl={con.img}></Con>
          </Link>
        ))}
      </Section>
    </div>
  );
};

// *git(기록)
// =>지정한 파일 및 폴더를 추적하여 각 파일,폴더의 변화된 부분을
// 기록하는 파일 관리 툴

// *git hub(저장소)
// =>git으로 관리된 파일을 업로드 하여 저장소에 저장 및 관리를 할수있는
// 개발자 플랫폼


