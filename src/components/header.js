import React,{useState} from "react";
import { Bar, Links, NavContainer } from "./headerStyle";
import starbucksLogo from "./images/Vector (3).svg";
import trademarkLogo from "./images/Vector (4).svg";
import SerchIcon from "../components/images/search-icon.svg";
import "../App.css";

function Header() {
 

  return (
    <div>
      <Bar>
        <img src={starbucksLogo} alt="starbucksLogo" className="starbucksLogo" />
        <img src={trademarkLogo} alt="trademarkLogo" className="trademarkLogo" />
        <NavContainer>
          <Links href="##">منو</Links>
          <Links href="##">فروشگاه&zwnj;ها</Links>
          <Links href="##">همکاری</Links>
        </NavContainer>
      </Bar>
      <img src={SerchIcon} alt="SerchIcon" className="SerchIcon"  onClick={()=>localStorage.removeItem("login")}/>
    </div>
  );
}
export default Header;
