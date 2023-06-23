import { UserIcon } from "./Icon";
export const Header = () => (
  <div>
    <a href="./">Answer Stack</a>
    <input type="text" placeholder="Search..." />
    <a href="./signin">
      <UserIcon />
      <span>Sign In</span>
    </a>
  </div>
);
