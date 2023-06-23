import { Header } from "./ui/components/Header";
import { HomePage } from "./ui/pages/HomePage";
import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.container}>
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
