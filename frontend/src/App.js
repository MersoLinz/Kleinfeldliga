import "./App.css";
import ResponsiveAppBar from "./components/Navbar";
import RegisterPlayer from "./components/Register";
import Tabelle from "./components/Tabelle";
import Teams from "./components/Teams";
import Wappen from "./components/Wappen";
import News from "./components/News";
import Spiele from "./components/Spiele";

function App() {
  return (
    <>
      <Wappen />
      <ResponsiveAppBar />
      <RegisterPlayer />
      <Teams />
      <Tabelle />
      <Spiele />
      <News />
    </>
  );
}

export default App;
