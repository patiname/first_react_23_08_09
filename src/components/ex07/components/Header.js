import { styled } from "styled-components";
import { mainColors } from "../../../GlobalStyled";

const SHeader = styled.header`
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: 900;
`;

const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  li {
    margin-left: 20px;
  }
  a {
    color: ${mainColors.fontColor};
  }
  /* =>상위 코드 처럼현재 컴포넌트의 
  자식 태그를 선택할수 있음 */
`;

export const Header = () => {
  return (
    <SHeader>
      <Logo>LOGO</Logo>
      <Menu>
        <li>
          <a href="#">menu</a>
        </li>
        <li>
          <a href="#">menu</a>
        </li>
        <li>
          <a href="#">menu</a>
        </li>
      </Menu>
    </SHeader>
  );
};
