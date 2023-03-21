import Header from "../../Containers/Header/Header";
import SideNav from "../../Containers/SideNav/SideNav";
import classes from "./Layout.module.css";

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <section className={classes.container}>
      <div className={classes.header}>
        <Header />
      </div>
      <div className={classes.body}>
        <div className={classes.sideNav}>
          <SideNav />
        </div>
        <div className={classes.body}>
          {children ? children : <>Nothing to see here</>}
        </div>
      </div>
    </section>
  );
};

export default Layout;
