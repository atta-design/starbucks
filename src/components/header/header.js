import React from "react";
import { Bar, Links, NavContainer } from "./headerStyle";
import starbucksLogo from "../../images/Vector (3).svg";
import trademarkLogo from "../../images/Vector (4).svg";
import SerchIcon from "../../images/search-icon.svg";
import {Link} from'react-router-dom'
import "../../App.css";

function Header() {
 

  return (
    <div>
      <Bar>
        <img src={starbucksLogo} alt="starbucksLogo" className="starbucksLogo" />
        <img src={trademarkLogo} alt="trademarkLogo" className="trademarkLogo" />
        <NavContainer>
        <Link to='/'><Links >صفحه&zwnj; اصلی&zwnj;</Links></Link>  
         <Link to='/productList'><Links >فروشگاه&zwnj;ها</Links></Link> 
         <Link to='coapration'><Links >همکاری</Links></Link> 
        </NavContainer>
      </Bar>
      <img src={SerchIcon} alt="SerchIcon" className="SerchIcon"  onClick={()=>localStorage.removeItem("login")}/>
    </div>
  );
}
export default Header;
