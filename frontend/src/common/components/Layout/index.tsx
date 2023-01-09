import Head from "next/head";
import { PropsWithChildren } from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { useStyles } from "./styles";

const Layout = ({ children }: PropsWithChildren<{}>) => {
  const { classes } = useStyles();
  return (
    <div className={classes.LayoutContainer}>
      <Head>
        <title>
          Banana Split Team - Learning and teaching online, made easy.
        </title>
      </Head>
      {/* <Background /> */}
      <NavBar />
      <div className={classes.ContentContainer}>{children}</div>
      <Footer />
      {/* {!isHideFooter && <Footer />} */}
    </div>
  );
};

export default Layout;
