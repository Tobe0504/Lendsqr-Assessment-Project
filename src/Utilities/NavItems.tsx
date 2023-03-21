import users from "../Assets/Icons/users.svg";
import guarantors from "../Assets/Icons/guarantors.svg";
import loans from "../Assets/Icons/loans.svg";
import decisionModels from "../Assets/Icons/decisionModels.svg";
import savings from "../Assets/Icons/savings.svg";
import loanRequests from "../Assets/Icons/loanRequests.svg";
import whiteLists from "../Assets/Icons/whitelists.svg";
import karma from "../Assets/Icons/karma.svg";

export const customerNavItems: {
  title: string;
  route: string;
  icon: string;
}[] = [
  {
    title: "Users",
    route: "/dashboard/users",
    icon: users,
  },
  {
    title: "Guarantors",
    route: "/dashboard/guarantors",
    icon: guarantors,
  },
  {
    title: "Loans",
    route: "/dashboard/loans",
    icon: loans,
  },
  {
    title: "Decision Models",
    route: "/dashboard/decision-models",
    icon: decisionModels,
  },
  {
    title: "Savings",
    route: "/dashboard/savings",
    icon: savings,
  },
  {
    title: "Loan Requests",
    route: "/dashboard/loan-requests",
    icon: loanRequests,
  },
  {
    title: "Whitelist",
    route: "/dashboard/whitelists",
    icon: whiteLists,
  },
  {
    title: "Karma",
    route: "/dashboard/karma",
    icon: karma,
  },
];
