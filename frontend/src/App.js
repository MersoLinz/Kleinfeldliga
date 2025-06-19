import React, { useState } from "react";
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
import Liga from "./components/Ligen";
import Liganotfound from "./components/Liganotfound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Ligaordnung from "./components/Ligaordnung";
import { LigaProvider } from "./components/LigaContext";

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
