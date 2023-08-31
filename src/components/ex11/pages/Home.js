import { Helmet } from "react-helmet";
import { PageTitle } from "../components/PageTitle";

export const Home = () => {
  return (
    <div>
      <PageTitle title={"홈"} />
      <h2>HOME page</h2>
    </div>
  );
};

// *Link
// =>리액트에선 a태그 대신 react-router-dom에 포함되어있는
// Link컴포넌트를 이용함
// =>to={경로} 속성을 사용하여 경로 지정

// *연습
// =>서브페이지 3,4 만들기
// =>헤더에 링크 연결
// =>404페이지에서 메인으로 갈수 있도록 링크 제작
