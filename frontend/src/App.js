import "./App.css";
import ResponsiveAppBar from "./components/Navbar";
import RegisterPlayer from "./components/register";
import Tabelle from "./components/Tabelle";
import Teams from "./components/Teams";
import Wappen from "./components/wappen";

function App() {
  return (
    <>
      <Wappen />
      <ResponsiveAppBar />
      <RegisterPlayer />
      <Teams />
      <Tabelle />
    </>
  );
}

export default App;
