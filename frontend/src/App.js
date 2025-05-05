import "./App.css";
import ResponsiveAppBar from "./components/Navbar";
import RegisterPlayer from "./components/register";
import Wappen from "./components/wappen";

function App() {
  return (
    <>
      <Wappen />
      <ResponsiveAppBar />
      <RegisterPlayer />
    </>
  );
}

export default App;
