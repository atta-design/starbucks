import { Box,styled,Button } from "@mui/material";
import { border } from "@mui/system";
import '../App.css'

export const BuyBasket = styled(Box)({
    width:'35vw',
    textAlign:'center',
display:'flex',
flexDirection:'column',
fontFamily:'Vazir'

   });
   export const BasketCard = styled(Box)({
    width:'60%',
    // height:'100px',
    padding:'40px',
   backgroundColor:'#FFFFFF',
   textAlign:'end',
   marginBottom:'16px',
borderRadius:'0px 11px 11px 0px',
fontFamily:'CustomFont',
boxShadow:' 1px 2px 2px rgba(143, 158, 163, 0.2), 2px 4px 4px rgba(143, 158, 163, 0.2), 4px 8px 16px rgba(143, 158, 163, 0.2)',
position:'relative'


   });

   export const IncrementBtn = styled(Box)({
     width:'20px',
     height:'20px',
     color:'#006341',
     border:'solid #006341',
     borderRadius:'100%',
     cursor:'pointer',
     textAlign:'center',
     alignItems:'center',
     alignContent:'center'
  
     });
     export const DecrementBtn = styled(Box)({
      width:'20px',
      height:'20px',
      color:'#404040',
      border:'solid #404040',
      borderRadius:'100%',
      cursor:'pointer',
      textAlign:'center',
      alignItems:'center',
      alignContent:'center'
   
      });