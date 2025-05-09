import "./App.css";
import ResponsiveAppBar from "./components/Navbar";
import RegisterPlayer from "./components/register";
import Tabelle from "./components/Tabelle";
import Teams from "./components/Teams";
import Wappen from "./components/wappen";
import News from "./components/news";

function App() {
  return (
    <>
      <Wappen />
      <ResponsiveAppBar />
      <RegisterPlayer />
      <Teams />
      <Tabelle />
      <News />
    </>
  );
}

export default App;
