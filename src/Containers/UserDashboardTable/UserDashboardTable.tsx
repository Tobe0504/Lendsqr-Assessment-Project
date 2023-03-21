import Card from "../../Components/Card/Card";
import classes from "./UserDashboardTable.module.css";
import filterIcon from "../../Assets/Icons/filterIcon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisVertical,
  faUserCheck,
  faUserXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { useContext, useEffect, useRef } from "react";
import { AppContext, AppContextValues } from "../../Context/AppContext";
import { activeToggler } from "../../HelperFunctions/ActiveToggler";

const UserDashboardTable = () => {
  // Context
  const { users, setUsers } = useContext(AppContext) as AppContextValues;

  //   Ref
  const popUpRef = useRef<HTMLDivElement>(null!);

  // Utilities
  const userDashboardTableHeader: string[] = [
    "Organization",
    "Username",
    "Email",
    "Phone number",
    "Date joined",
    "Status",
  ];

  const userStatusStyleHandler = (status: string) => {
    if (status === "Inactive") {
      return {
        background: "#f5f5f7",
        color: "#545F7D",
      };
    } else if (status === "Pending") {
      return {
        background: "#fdf7e5",
        color: "#E9B200",
      };
    } else if (status === "Blacklisted") {
      return {
        background: "#fce6eb",
        color: "#E4033B",
      };
    } else if (status === "Active") {
      return {
        background: "#f3fcf6",
        color: "#39CD62",
      };
    }
  };

  const userStatusHandler = (i: number, status: string) => {
    const modifiedUser = users.map((user, j) => {
      if (i === j) {
        return { ...user, status };
      }
      return { ...user };
    });
    setUsers(modifiedUser);
  };

  // Effects
  useEffect(() => {
    const removeDropdownHandler = (e: MouseEvent) => {
      if (!popUpRef?.current?.contains(e.target as Node)) {
        const modifiedUsers = users.map((user) => {
          return { ...user, isActive: false };
        });
        setUsers(modifiedUsers);
      }
    };
    document.addEventListener("mousedown", removeDropdownHandler);

    return () => {
      document.removeEventListener("mousedown", removeDropdownHandler);
    };
  }, [popUpRef, users, setUsers]);

  return (
    <div className={classes.outerContainer}>
      <Card>
        <div className={classes.container}>
          <div className={classes.userDashboardTableHeader}>
            {userDashboardTableHeader.map((header) => {
              return (
                <div
                  className={classes.userDashboardTableHeaderItem}
                  key={header}
                >
                  <div>{header}</div>
                  <div>
                    <img src={filterIcon} alt="Filter" />
                  </div>
                </div>
              );
            })}
          </div>
          <div className={classes.userDashboardTableBody}>
            {users.slice(0, 10).map((user, i) => {
              return (
                <div className={classes.userDashBoardTableBodyItemOuter}>
                  <div
                    className={classes.userDashboardTableBodyItem}
                    key={user.id}
                  >
                    <div>{user?.orgName}</div>
                    <div>{user.userName}</div>
                    <div>{user.email}</div>
                    <div>{user.phoneNumber}</div>
                    <div>{user.createdAt}</div>
                    <div>
                      <span style={userStatusStyleHandler(user.status)}>
                        {user.status}
                      </span>
                      <span
                        onClick={() => {
                          activeToggler(i, users, setUsers);
                        }}
                      >
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                      </span>
                    </div>
                  </div>
                  {/* Popup Menu */}
                  {user.isActive && (
                    <div className={classes.userPopUpMenu} ref={popUpRef}>
                      <div>
                        <span>
                          <FontAwesomeIcon icon={faEye} />
                        </span>
                        <span>View Details</span>
                      </div>
                      <div>
                        <span>
                          <FontAwesomeIcon icon={faUserXmark} />
                        </span>
                        <span
                          onClick={() => {
                            userStatusHandler(i, "Blacklisted");
                            //   inactiveToggler(users, setUsers);
                          }}
                        >
                          Blacklist User
                        </span>
                      </div>
                      <div>
                        <span>
                          <FontAwesomeIcon icon={faUserCheck} />
                        </span>
                        <span
                          onClick={() => {
                            userStatusHandler(i, "Active");
                            //   inactiveToggler(users, setUsers);
                          }}
                        >
                          Activate User
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default UserDashboardTable;
