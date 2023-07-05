import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles({
  box: {
    width: "100%",
    height: 200,
    padding: 10,
    borderRadius: 10,
    background: "#ffff",
  },
  dialogContainer: {
    display: "flex",
    width: "80%",
    height: "100%",
    background: "#ffff",
    paddingLeft: "20%",
  },
  dialogBox: {
    width: "90%",
    marginTop: 30,
    height: 540,
    padding: 10,
    borderRadius: 10,
    background: "#ffff",
  },
  headingStyle: {
    fontWidth: 24,
    fontWeight: "bold",
    letterSpacing: 1,
    paddingTop: 5,
    paddingBottom: 5,
  },

  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
