import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles({
  box: {
    width: "90%",
    height: 250,
    padding: 10,
    borderRadius: 10,
    marginTop: "5%",
    background: "#fff",
  },

  dialogContainer: {
    display: "flex",
    width: "90%",
    height: "100%",
    paddingLeft: "10%",
  },
  dialogBox: {
    width: "90%",
    height: 740,
    padding: 10,
    borderRadius: 10,
    background: "#fff",
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
