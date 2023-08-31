import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainColors = {
  fontColor: "#333",
  pointColor: "#85E6C5",
};

export const GlobalStyled = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
    }

    body{
        font-family: 'Noto Sans KR', sans-serif;
    }

    a{
        text-decoration: none;
    }
`;
