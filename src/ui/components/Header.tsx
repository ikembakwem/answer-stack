/** @JSXImportSource @emotion/react */
import { css } from "@emotion/react";
import { UserIcon } from "./Icon";
import { gray5 } from "../../Styles";

export const Header = () => {
  const handleSearchInput = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log(e.currentTarget.value);
  };
  return (
    <div
      css={css`
        position: fixed;
        top: 0;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 20px;
        background-color: #fff;
        border-bottom: 1px solid ${gray5};
        box-shadow: 0 3px 7px 0
          rgba(110, 112, 114, 0.21);
      `}
    >
      <a href="./">Answer Stack</a>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleSearchInput}
      />
      <a href="./signin">
        <UserIcon />
        <span>Sign In</span>
      </a>
    </div>
  );
};
