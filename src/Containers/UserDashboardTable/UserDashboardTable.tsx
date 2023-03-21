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

const UserDashboardTable = () => {
  const userDashboardTableHeader: string[] = [
    "Organization",
    "Username",
    "Email",
    "Phone number",
    "Date joined",
    "Status",
  ];

  const users: {
    organization: string;
    username: string;
    email: string;
    phone: string;
    dateJoined: string;
    status: string;
    isActive: boolean;
  }[] = [
    {
      organization: "Lendsqr",
      username: "Adedeji",
      email: "adedeji@lendsqr.com",
      phone: "08078903721",
      dateJoined: "May 15, 2020 10:00 AM",
      status: "Inactive",
      isActive: false,
    },
    {
      organization: "Lendsqr",
      username: "Adedeji",
      email: "adedeji@lendsqr.com",
      phone: "08078903721",
      dateJoined: "May 15, 2020 10:00 AM",
      status: "Blacklisted",
      isActive: true,
    },
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

  return (
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
          {users.map((user) => {
            return (
              <div className={classes.userDashBoardTableBodyItemOuter}>
                <div
                  className={classes.userDashboardTableBodyItem}
                  key={user.username}
                >
                  <div>{user.organization}</div>
                  <div>{user.email}</div>
                  <div>{user.username}</div>
                  <div>{user.phone}</div>
                  <div>{user.dateJoined}</div>
                  <div>
                    <span style={userStatusStyleHandler(user.status)}>
                      {user.status}
                    </span>
                    <span>
                      <FontAwesomeIcon icon={faEllipsisVertical} />
                    </span>
                  </div>
                </div>
                {/* Popup Menu */}
                {user.isActive && (
                  <div className={classes.userPopUpMenu}>
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
                      <span>Blacklist User</span>
                    </div>
                    <div>
                      <span>
                        <FontAwesomeIcon icon={faUserCheck} />
                      </span>
                      <span>Activate User</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
};

export default UserDashboardTable;
