import { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import Layout from "./pages/Layout/Layout";
import FormPage from "./pages/FormPage/FormPage";

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/add" element={<FormPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default App;
