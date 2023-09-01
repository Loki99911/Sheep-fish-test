import { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import Layout from "./pages/Layout/Layout";
import SecondPage from "./pages/SecondPage/SecondPage";

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/add" element={<SecondPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default App;
