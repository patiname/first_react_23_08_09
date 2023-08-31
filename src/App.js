import Footer from "./components/ex02/Footer";
import Header from "./components/ex02/Header";
import Main from "./components/ex02/Main";
import { PropsEx, PropsEx02, PropsEx03 } from "./components/ex03/PropsEx";
import { FoodMenu } from "./components/ex03/ex/FoodMenu";
import { Ex04 } from "./components/ex04/Ex04";
import { Ex05 } from "./components/ex05-06/Ex05";
import { Ex07 } from "./components/ex07/Ex07";
import { Ex08 } from "./components/ex08/Ex08";
import { Ex09 } from "./components/ex09/Ex09";
import { MusicApp } from "./components/ex10/MusicApp";
import { Ex11 } from "./components/ex11/Ex11";
import { Ex12 } from "./components/ex12/Ex12";
// =>함수 앞에 export를 할땐 객체 형태로 import 해 와야됨

const App = () => {
  return (
    <>
      {/* <Header />
      <Main />
      <Footer /> */}
      {/* 2일차 */}

      {/* <PropsEx /> */}
      {/* <PropsEx02 />
      <PropsEx03 /> */}
      {/* <FoodMenu /> */}
      {/* 3일차 */}

      {/* <Ex04 /> */}
      {/* 4일차 */}

      {/* <Ex05 /> */}
      {/* 5~6일차 */}

      {/* <Ex07 /> */}
      {/* 7일차 */}

      {/* <Ex08 /> */}
      {/* 8일차 */}

      {/* <Ex09 /> */}
      {/* 9일차 */}

      {/* <MusicApp /> */}
      {/* 10일차 */}

      {/* <Ex11 /> */}
      {/* 11일차 */}

      <Ex12 />
    </>
  );
};

export default App;
// =>현재 App함수를 내보내기 함
// =>export(내보내기)를 해줘야 다른 파일에서 불러올수 있음
