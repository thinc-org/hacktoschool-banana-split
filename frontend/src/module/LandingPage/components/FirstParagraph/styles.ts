import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  FirstContainer: {
    display: "flex",
    width: "100%",
    height: "740px",
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F6F5F4",
    paddingLeft: "50px",
  },
  ButtonStyle: {
    display: "flex",
    flexDirection: "row",
    width: "165",
    height: "44",
    background: "#C3DCE3",
    borderRadius: "100px",
    marginTop: "32px",
  },
  MobilePage: {
    flexDirection: "column",
    width: "100%",
    height: "1000px",
    gap: "30px",
    alignContent: "center",
  },
}));
