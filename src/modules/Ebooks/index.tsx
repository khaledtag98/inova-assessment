import { Route, Routes } from "react-router-dom";
import Ebooks from "./views/Ebooks";
import EbookDetails from "./views/EbookDetails";

export default function EbooksRoot() {
  return (
    <Routes>
      <Route index element={<Ebooks />} />

      <Route path=":ebookID" element={<EbookDetails />} />

      <Route path="*" element={<>not found</>} />
    </Routes>
  );
}
