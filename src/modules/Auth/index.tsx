import { Route, Routes } from "react-router-dom";
import Login from "./views/login";

export default function AuthRoot() {
  return (
    <Routes>
      <Route index element={<Login />} />

      <Route path="*" element={<>not found</>} />
    </Routes>
  );
}
