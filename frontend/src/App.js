import React, { useState } from "react";
import "./App.css";
import RegisterPlayer from "./components/Spieler/RegisterPlayer";
import Tabelle from "./components/Wettbewerb/Tabelle";
import Teams from "./components/Wettbewerb/Teams";
import Wappen from "./components/Navigation/Wappen";
import News from "./components/Infos/News";
import Spiele from "./components/Wettbewerb/Spiele";
import Pagenotfound from "./components/Navigation/Pagenotfound";
import Rapper from "./components/Navigation/Rapper";
import Start from "./components/Infos/Start";
import Footer from "./components/Navigation/Footer";
import Liga from "./components/Ligen/Ligen";
import Liganotfound from "./components/Ligen/Liganotfound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Ligaordnung from "./components/Regeln/Ligaordnung";
import { LigaProvider } from "./components/Ligen/LigaContext";
import Spielregeln from "./components/Regeln/Spielregeln";

function App() {
  const [selectedState, setSelectedState] = useState("OOE");

  const handleStateSelect = (stateCode) => {
    if (stateCode !== selectedState) {
      setSelectedState(stateCode);
    }
  };

  return (
    <LigaProvider>
      <BrowserRouter>
        <Wappen onSelect={handleStateSelect} />
        {selectedState === "OOE" ? <Liga /> : <Liganotfound />}
        <Routes>
          <Route element={<Rapper />}>
            <Route path="/" element={<Start />} />
            <Route path="/kleinfeldliga" element={<Start />} />
            <Route path="/news" element={<News />} />
            <Route path="/teams" element={selectedState === "OOE" ? <Teams /> : <Pagenotfound />} />
            <Route path="/tabelle" element={selectedState === "OOE" ? <Tabelle /> : <Pagenotfound />}/>
            <Route path="/spielplan" element={selectedState === "OOE" ? <Spiele /> : <Pagenotfound />}/>
            <Route path="/ligaordnung" element={<Ligaordnung />} />
            <Route path="/spielregeln" element={<Spielregeln />} />
            <Route path="*" element={<Pagenotfound />} />
            <Route path="/register" element={<RegisterPlayer />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </LigaProvider>
  );
}

export default App;
