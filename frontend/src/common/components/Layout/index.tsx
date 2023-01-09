import Head from "next/head";
import { PropsWithChildren } from "react";
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
      {/* <Header /> */}
      {children}
      {/* {!isHideFooter && <Footer />} */}
    </div>
  );
};

export default Layout;
