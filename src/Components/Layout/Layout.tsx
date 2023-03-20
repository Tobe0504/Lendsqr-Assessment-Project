import classes from "./Layout.module.css";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return <section className={classes.container}></section>;
};

export default Layout;
