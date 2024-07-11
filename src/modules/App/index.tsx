import { lazy, Suspense } from "react";

import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import { useSelector } from "react-redux";

import { authSelector } from "../../redux/slices/auth";

import Loader from "../../shared/components/Loader";

import Theme from "./components/Theme";
import AppRoutes from "./views/AppRoutes";

const Landing = lazy(() => import("./views/Landing"));
const Auth = lazy(() => import("../Auth"));

export default function App() {
  // const { user, token } = useSelector(authSelector);
  const token = "user-token";
  const user = {
    name: "kahled",
  };

  return (
    <Router>
      <Theme>
        <Suspense fallback={<Loader />}>
          {token && user ? (
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path="/*" element={<AppRoutes />} />

                <Route path="/auth/*" element={<Navigate to="/" />} />

                {/* <Route path="/" element={null} /> */}
                <Route path="*" element={<>Not Found</>} />
              </Routes>
            </Suspense>
          ) : (
            <Suspense fallback={<Loader />}>
              <Routes>
                {/* LIST PUBLIC ROUTES HERE */}
                <Route index path="/" element={<Landing />} />
                <Route index path="/auth/*" element={<Auth />} />

                {/* <Route path="*" element={<Navigate to="/auth" />} /> */}
              </Routes>
            </Suspense>
          )}
        </Suspense>
      </Theme>
    </Router>
  );
}
