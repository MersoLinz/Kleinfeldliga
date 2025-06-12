import "./App.css";
import RegisterPlayer from "./components/RegisterPlayer";
import Tabelle from "./components/Tabelle";
import Teams from "./components/Teams";
import Wappen from "./components/Wappen";
import News from "./components/News";
import Spiele from "./components/Spiele";
import Pagenotfound from "./components/Pagenotfound";
import Rapper from "./components/Rapper";
import Start from "./components/Start";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <Wappen />
      <BrowserRouter>
        <Routes>
          <Route element={<Rapper />}>
            <Route path="/" element={<Start />} />
            <Route path="/kleinfeldliga" element={<Start />} />
            <Route path="/news" element={<News />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/tabelle" element={<Tabelle />} />
            <Route path="/spielplan" element={<Spiele />} />
            <Route path="/spielerstatistik" element={<RegisterPlayer />} />
            <Route path="*" element={<Pagenotfound />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;