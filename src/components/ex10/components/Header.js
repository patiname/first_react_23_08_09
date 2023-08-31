import { styled } from "styled-components";
import { mainColors } from "../../../GlobalStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faBars,
  faCaretDown,
  faTicket,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const SHeader = styled.header`
  display: flex;
  justify-content: space-between;
  article {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
  }
`;

const MoreBtn = styled.article`
  background-color: white;
  color: ${mainColors.fontColor};
`;

const MenuBtn = styled.article`
  border: 1px solid #f1f1f1;
`;

const HiddenMenu = styled.nav`
  width: 100%;
  height: 800px;
  position: absolute;
  top: ${(props) => props.$isAcitve};
  left: 0;
  background-color: #555;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  border-radius: 20px;
  transition: 0.2s;
`;

const Close = styled.div`
  width: 100%;
  text-align: right;
  font-size: 20px;
  cursor: pointer;
`;

const Profile = styled.div``;

const Avatar = styled.div`
  width: 60px;
  height: 60px;
  background-color: gray;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  svg {
    opacity: 0.7;
  }
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

const Items = styled.div``;

export const Header = () => {
  const [active, setActive] = useState("100%");
  console.log(active);

  return (
    <SHeader>
      <MoreBtn>
        <FontAwesomeIcon icon={faCaretDown} />
      </MoreBtn>

      <MenuBtn onClick={() => setActive("0")}>
        <FontAwesomeIcon icon={faBars} />
      </MenuBtn>

      <HiddenMenu $isAcitve={active}>
        <Close onClick={() => setActive("100%")}>
          <FontAwesomeIcon icon={faXmark} />
        </Close>

        <Profile>
          <Avatar>
            <FontAwesomeIcon icon={faUser} />
          </Avatar>

          <BtnWrap>
            <Items>
              <FontAwesomeIcon icon={faAddressCard} />
            </Items>
            <Items>
              <FontAwesomeIcon icon={faAddressCard} />
            </Items>
            <Items>
              <FontAwesomeIcon icon={faTicket} />
            </Items>
          </BtnWrap>
        </Profile>
      </HiddenMenu>
    </SHeader>
  );
};

// *메뉴 이벤트 작업
// 1.메뉴 버튼을 클릭하면 숨김메뉴가 top 100%에서 0%로 변경이됨
// 2.닫기 버튼을 클릭하면 숨김메뉴가 top 0에서 100%로 변경이됨
