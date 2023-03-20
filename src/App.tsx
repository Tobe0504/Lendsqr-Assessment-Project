import { Routes, Route } from "react-router-dom";
import Login from "./Containers/Login/Login";

const App: React.FC<any> = () => {
  return (
    <Routes>
      <Route element={<Login />} path="/" />
    </Routes>
  );
};

export default App;
