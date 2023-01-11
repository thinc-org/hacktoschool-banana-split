import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  NavBarLayout: {
    display: "flex",
    height: "88px",
    width: "100%",
    position: "fixed",
    backgroundColor: "#F6F5F4",
    flexDirection: "row",
    paddingLeft: "200px",
    alignItems: "center",
    gap: "30px",
  },
}));
