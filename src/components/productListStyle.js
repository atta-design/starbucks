import {Card ,styled,Typography,Box,Button,Divider} from "@mui/material";
import '../App.css'
export const ProductCard = styled(Card)({
   width:'14vw',
   height:'320px',
   margin:'50px 2.4vw 20px 2.4vw',
   display:'flex',
   justifyContent:'center',
   flexWrap:'wrap',
   boxShadow:'1px 2px 2px rgba(143, 158, 163, 0.2), 2px 4px 4px rgba(143, 158, 163, 0.2), 4px 8px 8px rgba(143, 158, 163, 0.2), 8px 16px 16px rgba(143, 158, 163, 0.2), 16px 32px 32px rgba(143, 158, 163, 0.2);',
   float:'left',
   borderRadius:'23px',
   
   

   
  });

  export const ProductName = styled(Typography)({
    display:'flex',
    width:'170px',
textAlign:'center' ,
position:'relative',
marginTop:'140px',
fontFamily:'Vazir',
fontSize:'14px',
justifyContent:'center'
   });
   export const AddButton = styled(Button)({
    backgroundColor:'#006341',
    width:'13vw',
    height:'38.37px',
    borderRadius:'32px',
    color:'#FFFFFF',
    fontFamily:'Vazir',
    ":hover":{
      backgroundColor:'#043301',

    }
   });

   export const AllProducts = styled(Box)({
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'center',
    position:'relative',
    width:'100%',
    marginTop:'70px',
    marginBottom:'60px'
   
   });
   export const Price = styled(Typography)({
    
      width:'170px',
  position:'relative',
  margin:'30px 0 10px 0',
  color:'#006341',
  fontFamily:'CustomFont',
  display:'flex',
  alignItems:'center',
  justifyContent:'center'


     });
     export const Title = styled(Typography)({
      height:'50px',
      width:'10px',
  textAlign:'right' ,
  position:'fixed',
  marginBottom:'70px',
top:118,
left:560,
paddingBottom:'40px',
position:'absolute',
clear:'both'
     });
     export const Line = styled(Typography)({
    //  backgroundColor:'red',
    marginTop:'10px',
     width:'100%',
     height:'3px',
backgroundImage:'linear-gradient(to right bottom,white,white, gray,white,white)',

    

     });