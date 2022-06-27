import React from 'react'
import {Bar,Links,NavContainer}from './headerStyle'
import Logo from './images/Vector (3).svg'
import Logo2 from './images/Vector (4).svg'
import SerchIcon from '../components/images/search-icon.svg'
import '../App.css'

 function Header() {
    return (
        <div>
            
            <Bar>
             <img src={Logo} alt='logo' className='logo'  />
             <img  src={Logo2} alt='logo' className='logo2' />
             <NavContainer>
                <Links href='##'>منو</Links>
                <Links href='##'>فروشگاه&zwnj;ها</Links>
                <Links href='##'>همکاری</Links>
                </NavContainer>
            </Bar>
          <img src={SerchIcon} alt='SerchIcon' className='SerchIcon'/>
      
        </div>
    )
}
export default Header