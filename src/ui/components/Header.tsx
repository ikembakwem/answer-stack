import { UserIcon } from "./Icon";
import "./Header.css";

export const Header = () => {
  const handleSearchInput = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log(e.currentTarget.value);
  };
  return (
    <div className="container">
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
