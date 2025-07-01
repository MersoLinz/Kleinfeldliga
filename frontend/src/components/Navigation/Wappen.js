import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ooe from "../../assets/wappen/ooe.png";
import ktn from "../../assets/wappen/ktn.png";
import w from "../../assets/wappen/w.png";
import vbg from "../../assets/wappen/vbg.png";
import t from "../../assets/wappen/t.png";
import bgld from "../../assets/wappen/bgld.png";
import noe from "../../assets/wappen/noe.png";
import sbg from "../../assets/wappen/sbg.png";
import stmk from "../../assets/wappen/stmk.png";
import { LigaContext } from "../Ligen/LigaContext";

function Wappen({ onSelect }) {

  const {setBundesland} = useContext(LigaContext);

  const imgStyle = {
  height: 50,
  margin: 10,
  cursor: "pointer",
  };

  const navigate = useNavigate();

  const handleSelect = (stateCode) => {
    onSelect(stateCode);
    setBundesland(stateCode);
    navigate("/");
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#212121", gap: 30, height: 100 }}>
      <img src={ooe} alt="OÖ" style={imgStyle} onClick={() => handleSelect("OOE")} />
      <img src={ktn} alt="KTN" style={imgStyle} onClick={() => handleSelect("KTN")} />
      <img src={w} alt="WIEN" style={imgStyle} onClick={() => handleSelect("WIEN")} />
      <img src={vbg} alt="VBG" style={imgStyle} onClick={() => handleSelect("VBG")} />
      <img src={t} alt="TIROL" style={imgStyle} onClick={() => handleSelect("TIROL")} />
      <img src={bgld} alt="BGLD" style={imgStyle} onClick={() => handleSelect("BGLD")} />
      <img src={noe} alt="NÖ" style={imgStyle} onClick={() => handleSelect("NOE")} />
      <img src={sbg} alt="SBG" style={imgStyle} onClick={() => handleSelect("SBG")} />
      <img src={stmk} alt="STMK" style={imgStyle} onClick={() => handleSelect("STMK")} />
    </div>
  );
}

export default Wappen;
