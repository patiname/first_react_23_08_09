import {
  faBackward,
  faForward,
  faPause,
  faRepeat,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";

const Progress = styled.div`
  margin: 30px 0;
`;

const BarWrap = styled.div`
  height: 5px;
  background-color: gray;
  border-radius: 2px;
`;

const Bar = styled.div`
  width: 10%;
  height: 100%;
  background-color: coral;
`;

const PlayTime = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin-top: 5px;
  color: #dbdbdb;
`;

const Time = styled.div``;

const BtnWrap = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  font-size: 18px;
  li:nth-child(3) {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: coral;
    font-size: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const PlayBtn = () => {
  return (
    <>
      <Progress>
        <BarWrap>
          <Bar />
        </BarWrap>

        <PlayTime>
          <Time>00:03</Time>
          <Time>03:40</Time>
        </PlayTime>
      </Progress>

      <BtnWrap>
        <li>
          <FontAwesomeIcon icon={faShuffle} />
        </li>
        <li>
          <FontAwesomeIcon icon={faBackward} />
        </li>
        <li>
          <FontAwesomeIcon icon={faPause} />
        </li>
        <li>
          <FontAwesomeIcon icon={faForward} />
        </li>
        <li>
          <FontAwesomeIcon icon={faRepeat} />
        </li>
      </BtnWrap>
    </>
  );
};
