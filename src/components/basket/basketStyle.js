import { Box, styled, Button, Typography } from "@mui/material";
import "../../App.css";

export const BasketContainer = styled(Box)({
  position: "relative",
  width: "28vw",
  height: "52%",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  fontFamily: "Vazir",
  borderRight: "solid 1px gray ",
});
export const BasketCard = styled(Box)({
  width: "80%",
  padding: "17px",
  backgroundColor: "#FFFFFF",
  textAlign: "end",
  marginBottom: "16px",
  borderRadius: "0px 11px 11px 0px",
  fontFamily: "CustomFont",
  boxShadow:
    " 1px 2px 2px rgba(143, 158, 163, 0.2), 2px 4px 4px rgba(143, 158, 163, 0.2), 4px 8px 16px rgba(143, 158, 163, 0.2)",
  position: "relative",
});

export const IncrementBtnAndDecrementBtn = styled(Box)({
  position: "relative",
  width: "20px",
  height: "20px",
  color: "#006341",
  border: "solid #006341",
  borderRadius: "100%",
  cursor: "pointer",
  textAlign: "center",
  alignItems: "center",
  alignContent: "center",
});

export const Bill = styled(Box)({
  position: "absolute",
  left: "8px",
  direction: "ltr",
  display: "flex",
});
export const SendButton = styled(Button)({
  backgroundColor: " #006341",
  borderRadius: "11px",
  color: "#FFFFFF",
  width: "100%",
  height: "49px",
  border: "none",
  fontSize: "15px",
  fontFamily: "Vazir",
  marginTop: "14px",
  ":hover": {
    backgroundColor: "#043301",
  },
});
export const NullBasket = styled(Typography)({
  color: "rgb(133, 132, 132)",
  width: "50%",
  fontSize: "32px",
  fontWeight: "400",
  textAlign: "center",
  margin: "0px auto 0 auto",
  fontFamily: "Vazir-Light",
  position: "relative",
  top: "241px",
  left: "0px",
  "@media screen and (max-width: 1000px)": {
    fontSize: "22px",
  },
});
export const BasketLogoContainer = styled(Box)({
  marginLeft: "-64px",
});
export const PriceBox = styled(Box)({
  color: "#006341",
  position: "absolute",
  width: "70px",
  right: "19px",
  display: "flex",
});
export const QuantityBox = styled(Box)({
  display: "flex",
});
