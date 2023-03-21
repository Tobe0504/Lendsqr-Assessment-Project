import { useContext } from "react";
import Dropdown from "../../Components/Dropdown/Dropdown";
import { AppContext, AppContextValues } from "../../Context/AppContext";
import classes from "./UserDashboardTableFilter.module.css";

const UserDashboardTableFilter = () => {
  // context
  const { selectedOrganization, setSelectedOrganization, organizationsArray } =
    useContext(AppContext) as AppContextValues;
  return (
    <div className={classes.container}>
      <div className={classes.filterItem}>
        <div>Organization</div>
        <div>
          <Dropdown
            selected={selectedOrganization}
            setSelected={setSelectedOrganization}
            options={organizationsArray}
            title="Select"
          />
        </div>
      </div>
    </div>
  );
};

export default UserDashboardTableFilter;
