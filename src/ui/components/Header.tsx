import { UserIcon } from "./Icon";
import classes from "./Header.module.css";

export const Header = () => {
  const handleSearchInput = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log(e.currentTarget.value);
  };
  return (
    <div className={classes.container}>
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
