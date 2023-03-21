import { Link } from "react-router-dom";
import classes from "./SideNavListContainer.module.css";

type SideNavListContainerProps = {
  header: string;
  navListstArray: {
    title: string;
    route: string;
    icon: string;
  }[];
};

const SideNavListContainer = ({
  header,
  navListstArray,
}: SideNavListContainerProps) => {
  return (
    <div className={classes.container}>
      <div className={classes.navListHeader}>{header}</div>
      <div className={classes.navListItems}>
        {navListstArray.map((navItem, i) => {
          return (
            <Link
              className={`${classes.navListItem} ${
                window.location.pathname === navItem.route
                  ? classes.activeNav
                  : null
              }`}
              key={i}
              to={navItem.route}
              onClick={() => {
                console.log(window.location.pathname);
              }}
            >
              {window.location.pathname === navItem.route && (
                <div className={classes.activenavIndicator}></div>
              )}
              <div>
                <img src={navItem.icon} alt={navItem.title} />
              </div>
              <div>{navItem.title}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SideNavListContainer;
