/** @JSXImportSource @emotion/react */
import styled from "@emotion/styled";
import { UserIcon } from "./Icon";
import { gray5 } from "../../Styles";
import { LogoLink, NavLink } from "./Links";
import { SearchBox } from "./SearchBox";

export const Header = () => {
  const handleSearchInput = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log(e.currentTarget.value);
  };
  return (
    <Wrapper>
      <LogoLink href="./">Answer Stack</LogoLink>
      <SearchContainer>
        <SearchBox
          type="text"
          placeholder="Search..."
          onChange={handleSearchInput}
        />
      </SearchContainer>

      <NavLink label="Sign In" url="/signin">
        <UserIcon></UserIcon>
      </NavLink>
      <NavLink label="Sign up" url="/register" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #fff;
  border-bottom: 1px solid ${gray5};
  box-shadow: 0 3px 7px 0 rgba(110, 112, 114, 0.21);
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;
