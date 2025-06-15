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
  const [selectedState, setSelectedState] = useState(null);

  return (
    <LigaProvider>
      <BrowserRouter>
        <Wappen onSelect={(stateCode) => setSelectedState(stateCode)} />
        {selectedState === "OOE" && <Liga />}
        {selectedState && selectedState !== "OOE" && <Liganotfound />}
        
        <Routes>
          <Route element={<Rapper />}>
            <Route path="/" element={<Start />} />
            <Route path="/kleinfeldliga" element={<Start />} />
            <Route path="/news" element={<News />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/tabelle" element={<Tabelle />} />
            <Route path="/spielplan" element={<Spiele />} />
            <Route path="/ligaordnung" element={<Ligaordnung />} />
            <Route path="*" element={<Pagenotfound />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </LigaProvider>
  );
}

export default App;
