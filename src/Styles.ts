import styled from "@emotion/styled";

export const gray1 = "#383737";
export const gray2 = "#5c5a5a";
export const gray3 = "#857c81";
export const gray4 = "#b9b9b9";
export const gray5 = "#e3e2e2";
export const gray6 = "#f7f8fa";
export const primary1 = "#681c41";
export const primary2 = "#824c67";
export const accent1 = "#dbb365";
export const accent2 = "#efd197";

export const fontfamily =
  "'Segoe UI', 'Helvetica Neue', 'sans-serif'";
export const fontSize = "16px";

export const PrimaryButton = styled.button`
  background-color: ${primary2};
  border: 2px solid ${primary2};
  border-radius: 8px;
  font-family: ${fontfamily};
  font-size: ${fontSize};
  padding: 6px 12px;
  height: 40px;
  color: #fff;
  cursor: pointer;
  :hover {
    background-color: ${primary1};
  }
  :focus {
    outline-color: ${primary2};
  }
  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
