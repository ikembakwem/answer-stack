import styled from "@emotion/styled";
import { UserIcon } from "./Icon";
import { gray5 } from "../../Styles";
import { LogoLink, NavLink } from "./Links";
import { SearchBox } from "./SearchBox";
import { useSearchParams } from "react-router-dom";
import { FormEvent, useState } from "react";

export const Header = () => {
  const [searchParams] = useSearchParams();
  const criteria = searchParams.get("criteria") || "";
  const [search, setSearch] = useState(criteria);

  const handleSearchInput = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearch(e.currentTarget.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(search);
  };
  return (
    <Wrapper>
      <LogoLink to="/">Answer Stack</LogoLink>
      <SearchContainer>
        <form onSubmit={handleSubmit}>
          <SearchBox
            type="text"
            placeholder="Search..."
            name="search"
            onChange={handleSearchInput}
            value={search}
          />
        </form>
      </SearchContainer>

      <NavLink to="/login">
        <UserIcon />
        <span>Sign In</span>
      </NavLink>
      <NavLink to="/register">Sign Up</NavLink>
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
