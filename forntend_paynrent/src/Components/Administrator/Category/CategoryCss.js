import { makeStyles } from "@mui/styles";
import { flexbox } from "@mui/system";
export const useStyles = makeStyles({
  color: {
    // background: "#CDBBF6",
    height: "110vh",
  },
  box: {
    width: "70%",
    height: 250,
    padding: 10,
    borderRadius: 10,
    border: "2px solid #ecf0f1",
    boxShadow: "1px 1px 4px 4px #ecf0f1",
    background: "#fffff",
    marginTop: "3%",
    marginLeft: "15%",
  },
  headingStyle: {
    fontWidth: 24,
    fontWeight: "bold",
    letterSpacing: 1,
    paddingTop: 5,
    paddingBottom: 5,
  },
  center: {
    marginTop: 10,
    display: "flex",
    justifyContent: "left",
    alignItem: "center",
    flexDirection: "row",
  },
});
