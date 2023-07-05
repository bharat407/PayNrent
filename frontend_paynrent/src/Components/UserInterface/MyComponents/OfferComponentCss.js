import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  mainContainer: {
    width: "100%",
  },

  heading: {
    fontSize: 35,
    fontWight: 800,
    fontFamily: "Arial Black",
    color: "#A8B5C0",
    marginBottom: 20,
  },

  wrapper: {
    position: "relative",
    borderRadius: "16px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 2px 0 rgb(0 0 0 / 7%)",
    width: 350,
    height: 100,
    // paddingLeft: 5,
    // paddingRight: 10,
  },

  iconSpan: {
    display: "inline-block",
    position: "absolute",
    top: "50%",
    marginLeft: 20,
    transform: "translateY(-50%)",
    // height: "105px",
    width: "105px",
    // marginRight: 50,
  },

  icon: {
    // height: "100%",
    width: "300%",
    objectFit: "contain",
  },

  cardHeading: {
    fontFamily: "Poppins",
    fontStretch: "normal",
    fontStyle: "normal",
    letterSpacing: "normal",
    margin: 0,
    fontWeight: 600,
    position: "relative",
    left: 84,
    top: 18,
  },

  cardDesc: {
    fontFamily: "Poppins",
    fontStretch: "normal",
    fontStyle: "normal",
    letterSpacing: "normal",
    margin: 0,
    fontWeight: 400,
    position: "absolute",
    left: 84,
    top: 42,
    color: "rgba(18,34,50,.7)",
    right: 4,
  },

  subContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },

  iconContainer: {
    marginTop: "6px",
  },

  mainArrow: {
    cursor: "pointer",
  },
});
