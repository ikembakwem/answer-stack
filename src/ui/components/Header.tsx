import { UserIcon } from "./Icon";
export const Header = () => {
  const handleSearchInput = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log(e.currentTarget.value);
  };
  return (
    <div>
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
