import { Routes, Route } from "react-router-dom";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import Dashboard from "./Containers/Dashboard/Dashboard";
import Login from "./Containers/Login/Login";

const App: React.FC<any> = () => {
  return (
    <Routes>
      <Route element={<Login />} path="/" />

      <Route
        element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }
        path="/dashboard"
      />
    </Routes>
  );
};

export default App;
