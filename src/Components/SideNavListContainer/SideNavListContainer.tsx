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
          console.log(window.location.pathname);

          return (
            <div
              className={`${classes.navListItem} ${
                window.location.pathname.includes(navItem.route)
                  ? classes.activeNav
                  : null
              }`}
              key={i}
            >
              {window.location.pathname.includes(navItem.route) && (
                <div className={classes.activenavIndicator}></div>
              )}
              <div>
                <img src={navItem.icon} alt={navItem.title} />
              </div>
              <div>{navItem.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideNavListContainer;
