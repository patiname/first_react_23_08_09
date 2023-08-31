import {
  faBackward,
  faBars,
  faCaretDown,
  faForward,
  faPause,
  faRepeat,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";
import { mainColors } from "../../GlobalStyled";
import { Header } from "./components/Header";
import { CoverImg } from "./components/CoverImg";
import { PlayBtn } from "./components/PlayBtn";

const Wrap = styled.div`
  max-width: 390px;
  width: 100%;
  height: 800px;
  margin: 0 auto;
  background-color: ${mainColors.fontColor};
  border-radius: 20px;
  color: white;
  padding: 30px;
  position: relative;
  overflow: hidden;
`;

export const MusicApp = () => {
  const bgUrl =
    "https://images.unsplash.com/photo-1619983081593-e2ba5b543168?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWxidW0lMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80";

  return (
    <>
      <Wrap>
        <Header />

        <CoverImg $img={bgUrl} />

        <PlayBtn />
      </Wrap>
    </>
  );
};
