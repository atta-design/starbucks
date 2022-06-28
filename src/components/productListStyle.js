import { Card, styled, Typography, Box, Button } from "@mui/material";
import "../App.css";

export const ProductCardsContainer = styled(Box)({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  position: "relative",
  width: "100%",
  marginTop: "70px",
  marginBottom: "120px",
});
export const ProductCard = styled(Card)({
  width: "14vw",
  height: "320px",
  margin: "50px 2.4vw 20px 2.4vw",
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  boxShadow:
    "1px 2px 2px rgba(143, 158, 163, 0.2), 2px 4px 4px rgba(143, 158, 163, 0.2), 4px 8px 8px rgba(143, 158, 163, 0.2), 8px 16px 16px rgba(143, 158, 163, 0.2), 16px 32px 32px rgba(143, 158, 163, 0.2);",
  float: "left",
  borderRadius: "23px",
  "@media screen and (max-width: 940px)": {
    width: "17vw",
    margin: "50px 1.4vw 20px 1.4vw",
  },
});

export const ProductName = styled(Typography)({
  display: "flex",
  width: "170px",
  textAlign: "center",
  position: "relative",
  marginTop: "140px",
  fontFamily: "Vazir",
  fontSize: "14px",
  justifyContent: "center",
});
export const Price = styled(Typography)({
  width: "170px",
  position: "relative",
  margin: "20px 0 5px 0",
  color: "#006341",
  fontFamily: "CustomFont",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
export const AddButton = styled(Button)({
  backgroundColor: "#006341",
  width: "13vw",
  height: "38.37px",
  borderRadius: "32px",
  color: "#FFFFFF",
  fontFamily: "Vazir",
  ":hover": {
    backgroundColor: "#043301",
  },
});

export const Title = styled(Typography)({
  fontFamily: "Vazir",
  fontSize: "25px",
  fontWeight: "400",
  position: "absolute",
  justifyContent: "center",
  top: "-0px",
  color: "#404040",
  width: " 200px",
  textAlign: "center",
  "@media screen and (max-width: 940px)": {
    fontSize: "20px",
  },
});
export const Line = styled(Typography)({
  marginTop: "10px",
  width: "100%",
  height: "3px",
  backgroundImage:
    "linear-gradient(to right bottom,white,white, gray,white,white)",
});
export const ProgressSpinnerContainer = styled(Box)({
  width: "50vw",
  height: "600px",
  display: "flex",
  justifyContent: "center",
});
