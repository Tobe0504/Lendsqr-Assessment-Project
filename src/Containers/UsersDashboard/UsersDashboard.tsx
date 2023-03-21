import Layout from "../../Components/Layout/Layout";
import UserDashboardTable from "../UserDashboardTable/UserDashboardTable";
import UsersDashboardSummary from "../UsersDashboardSummary/UsersDashboardSummary";
import classes from "./UsersDashboard.module.css";

const UsersDashboard = () => {
  return (
    <Layout>
      <section className={classes.container}>
        <div className={classes.header}>Users</div>
        <div className={classes.usersSummary}>
          <UsersDashboardSummary />
        </div>

        <div className={classes.userDashboardTable}>
          <UserDashboardTable />
        </div>
      </section>
    </Layout>
  );
};

export default UsersDashboard;
