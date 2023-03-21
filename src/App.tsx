import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import UsersDashboard from "./Containers/UsersDashboard/UsersDashboard";
import Login from "./Containers/Login/Login";

const App: React.FC<any> = () => {
  return (
    <Routes>
      <Route element={<Login />} path="/" />

      <Route
        element={
          <RequireAuth>
            <UsersDashboard />
          </RequireAuth>
        }
        path="/dashboard/users"
      />

      <Route
        element={
          <RequireAuth>
            <Layout></Layout>
          </RequireAuth>
        }
        path="*"
      />
    </Routes>
  );
};

export default App;
