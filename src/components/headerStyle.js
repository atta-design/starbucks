import { Toolbar, styled, Link, Box } from "@mui/material";

export const Bar = styled(Toolbar)({
  width: "96%",
  height: "100px",
  direction: "rtl",
  display: "flex",
  flexDirection: "row",
  fontFamily: "Vazir",
});

export const Links = styled(Link)({
  height: "40px",
  direction: "rtl",
  color: "#404040",
  textDecoration: "none",
  marginLeft: "90px",
  fontSize: "25px",
  fontWeight: "400",
  "@media screen and (max-width: 940px)": {
    fontSize: "20px",
  },
});

export const NavContainer = styled(Box)({
  marginRight: "110px",
});
