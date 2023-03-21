import axios from "axios";
import { createContext, useEffect, useState } from "react";

// Types
type AppContextProps = {
  children: React.ReactNode;
};

export type AppContextValues = {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  getUsers: () => void;
  users: User[] | any[];
  setUsers: React.Dispatch<React.SetStateAction<any[] | User[]>>;
  isSendingRequest: boolean;
  activeUsers: User[] | any[];
  usersWithLoans: User[] | any[];
  usersWithSavings: User[] | any[];
};

export type User = {
  user: {
    accountBalance: string;
    accountNumber: string;
    createdAt: string;
    education: {
      duration: string;
      employmentStatus: string;
      level: string;
      loanRepayment: string;
    };
    monthlyIncome: string[];
    officeEmail: string;
    sector: string;
    email: string;
    guarantor: {
      address: string;
      firstName: string;
      gender: string;
      lastName: string;
      phoneNumber: string;
    };
    profile: {
      address: string;
      avatar: string;
      bvn: string;
      currency: string;
      firstName: string;
      gender: string;
      lastName: string;
      phoneNumber: string;
    };
    socials: {
      facebook: string;
      instagram: string;
      twitter: string;
    };
    userName: string;
    isActive: boolean;
    status: string;
  };
  setUser: React.Dispatch<React.SetStateAction<any[] | User[]>>;
};

export const AppContext = createContext<AppContextValues | null>(null);

const AppContextProvider = ({ children }: AppContextProps) => {
  // State
  const [searchValue, setSearchValue] = useState<string>("");
  const [users, setUsers] = useState<User[] | any[]>([]);
  const [isSendingRequest, setIsSendingRequest] = useState<boolean>(false);

  // Utilities

  // Fetch Users
  const getUsers = () => {
    setIsSendingRequest(true);
    axios
      .get("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
      .then((res) => {
        console.log(res, "Users");
        const modifiedData = res.data.map((user: {}) => {
          return { ...user, isActive: false, status: "Active" };
        });
        setUsers(modifiedData);
        setIsSendingRequest(false);
      })
      .catch((err) => {
        console.log(err, "Users");
        setIsSendingRequest(false);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  const activeUsers = users.filter((user) => {
    return user.status === "Active";
  });

  const usersWithLoans = users.filter((user) => {
    return Number(user.education.loanRepayment) > 0;
  });

  const usersWithSavings = users.filter((user) => {
    return Number(user.accountBalance) > 0;
  });

  return (
    <AppContext.Provider
      value={{
        searchValue,
        setSearchValue,
        getUsers,
        users,
        setUsers,
        isSendingRequest,
        activeUsers,
        usersWithLoans,
        usersWithSavings,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
