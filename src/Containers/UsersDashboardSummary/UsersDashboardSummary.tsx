import classes from "./UsersDashboardSummary.module.css";
import userSummaryUsers from "../../Assets/Icons/usersSummaryUsers.svg";
import userSummaryActiveUsers from "../../Assets/Icons/usersSummaryActiveUsers.svg";
import usersSummaryUsersWithLoan from "../../Assets/Icons/usersSummaryUsersWithLoans.svg";
import usersSummaryUsersWithSavings from "../../Assets/Icons/usersSummaryUsersWithSavings.svg";
import Card from "../../Components/Card/Card";

const UsersDashboardSummary = () => {
  return (
    <section className={classes.container}>
      {/* Users */}
      <Card>
        <div className={classes.userSummary}>
          <div>
            <img src={userSummaryUsers} alt="Users" />
          </div>
          <h4>Users</h4>
          <h2>2,453</h2>
        </div>
      </Card>

      {/* Users */}
      <Card>
        <div className={classes.userSummary}>
          <div>
            <img src={userSummaryActiveUsers} alt="Active Users" />
          </div>
          <h4>Active Users</h4>
          <h2>2,453</h2>
        </div>
      </Card>

      {/* Users */}
      <Card>
        <div className={classes.userSummary}>
          <div>
            <img src={usersSummaryUsersWithLoan} alt="Users with Loan" />
          </div>
          <h4>Users with Loans</h4>
          <h2>2,453</h2>
        </div>
      </Card>

      {/* Users */}
      <Card>
        <div className={classes.userSummary}>
          <div>
            <img src={usersSummaryUsersWithSavings} alt="Users with savings" />
          </div>
          <h4>Users with Savings</h4>
          <h2>2,453</h2>
        </div>
      </Card>
    </section>
  );
};

export default UsersDashboardSummary;
