import styled from "@emotion/styled";
import {
  fontSize,
  fontfamily,
  gray2,
  gray5,
} from "../../Styles";
import { ReactNode, FC } from "react";

interface Props {
  children: ReactNode;
}

export const SearchBox: FC<Props> = ({ children }) => (
  <Wrapper>{children}</Wrapper>
);

const Wrapper = styled.div`
  input {
    font-family: ${fontfamily};
    font-size: ${fontSize};
    padding: 8px 10px;
    border: 1px solid ${gray5};
    border-radius: 3px;
    color: ${gray2};
    background-color: #fff;
    width: 320px;
    height: 40px;
    :focus {
      outline-color: ${gray5};
    }
  }
`;
