import * as React from "react";
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  Navigate,
} from "react-router-dom";
import { fakeAuthProvider } from "./auth";
import DefaultLayout from "./components/Layout/DefaultLayout";
import TopPage from "./pages/TopPage";
import MyRecord from "./pages/MyRecord";
import UserLogin from "./pages/Login";
import ColumnPage from "./pages/ColumnPage";

export default function routing() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/column" element={<ColumnPage />} />
          <Route
            path="/"
            element={
              <RequireAuth>
                <TopPage />
              </RequireAuth>
            }
          />
          <Route
            path="/my-record"
            element={
              <RequireAuth>
                <MyRecord />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

interface AuthContextType {
  user: any;
  signin: (user: string, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

let AuthContext = React.createContext<AuthContextType>(null!);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  let [user, setUser] = React.useState<any>(
    localStorage.getItem("token") || ""
  );

  let signin = (newUser: string, callback: VoidFunction) => {
    return fakeAuthProvider.signin(() => {
      localStorage.setItem("token", newUser);
      setUser(newUser);
      callback();
      window.location.reload();
    });
  };

  let signout = (callback: VoidFunction) => {
    return fakeAuthProvider.signout(() => {
      localStorage.removeItem("token");
      setUser(null);
      callback();
    });
  };

  let value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const LoginPage = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();

  let from = location.state?.from?.pathname || "/";

  function handleSubmit(values: any) {

    auth.signin(values.userName, () => {
      navigate(from, { replace: true });
    });
  }

  return <UserLogin handleSubmitLogin={handleSubmit} />;
};

const useAuth = () => {
  return React.useContext(AuthContext);
};

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};
