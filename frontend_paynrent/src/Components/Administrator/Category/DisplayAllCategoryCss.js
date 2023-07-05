import { makeStyles } from "@mui/styles";
import { flexbox } from "@mui/system";
export const useStyles = makeStyles({
  box: {
    width: "90%",
    padding: 10,
    borderRadius: 10,
    marginTop: "5%",
    background: "#fff",
  },

  dialogContainer: {
    display: "flex",
    width: "80%",
    height: "100%",
    paddingLeft: "20%",
    background: "#ffff",
  },
  dialogBox: {
    width: "80%",
    height: 560,
    padding: 10,
    marginTop: 20,
    borderRadius: 10,
    background: "#ffff",
  },
  headingStyle: {
    fontWidth: 30,
    fontWeight: "bold",
    // fontSize: 30,
    letterSpacing: 1,
    paddingTop: 5,
    paddingBottom: 5,
  },
  center: { display: "flex", justifyContent: "center", alignItem: "center" },
});
