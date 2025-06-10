import * as React from "react";
import ooe from "../assets/ooe.png";
import noe from "../assets/noe.png";
import sbg from "../assets/sbg.png";
import w from "../assets/w.png";
import vbg from "../assets/vbg.png";
import t from "../assets/t.png";
import bgld from "../assets/bgld.png";
import stmk from "../assets/stmk.png";
import ktn from "../assets/ktn.png";
import { Navigate } from "react-router-dom"; // --> Falsche Verwendung von Navigate

function Wappen() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "grey",
          gap: 30,
          height: 100,
        }}
      >
        <img
          src={ooe}
          alt="OÖ"
          style={{ height: 50, margin: 10 }}
          onClick={() => Navigate("*")} // --> Falsche Verwendung von Navigate
        />
        <img src={ktn} alt="KTN" style={{ height: 50, margin: 10 }} />
        <img src={w} alt="WIEN" style={{ height: 50, margin: 10 }} />
        <img src={vbg} alt="VBG" style={{ height: 50, margin: 10 }} />
        <img src={t} alt="TIROL" style={{ height: 50, margin: 10 }} />
        <img src={bgld} alt="BGLD" style={{ height: 50, margin: 10 }} />
        <img src={noe} alt="NÖ" style={{ height: 50, margin: 10 }} />
        <img src={sbg} alt="SBG" style={{ height: 50, margin: 10 }} />
        <img src={stmk} alt="STMK" style={{ height: 50, margin: 10 }} />
      </div>
    </>
  );
}
export default Wappen;