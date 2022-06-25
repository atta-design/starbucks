import {Toolbar,styled,Link}from '@mui/material';

export const Bar = styled(Toolbar)({
   width:'96%',
    height:'100px',
    direction:'rtl',
    display:'flex',
    flexDirection:'row',
    fontFamily:'Vazir'
   });

   export const Links = styled(Link)({
       height:'40px',
       direction:'rtl',
       color:'#404040',
textDecoration:'none'  ,
marginLeft:'30px'     
      });

//       export const LOGO = styled(Icon)({
//          height:'40px',
//          direction:'rtl',
//          color:'#404040',
//   textDecoration:'none'  ,
//   marginLeft:'30px'     
//         });