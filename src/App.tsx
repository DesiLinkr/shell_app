import ReactDOM from "react-dom/client";
import "./index.css";
import { lazy, Suspense } from "react";
await import("auth_app/styles");
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
const SignUp = lazy(() => import("auth_app/sign_up"));
const SignIn = lazy(() => import("auth_app/sign_in"));
const ResetPassword = lazy(() => import("auth_app/restpassword"));
const ForgotPassword = lazy(() => import("auth_app/forgot_password"));
const SecureAccount = lazy(() => import("auth_app/secureAccount"));
const GithubCallback = lazy (()=>import("auth_app/github"))
const LinkedinCallback = lazy(()=>import("auth_app/linkedin"))
const router = createBrowserRouter([
  {
    
    path: "/auth/sign_up",
    element: <SignUp />,
  },
  {
    path: "/auth/sign_in",
    element: <SignIn />,
  },
  {
    path: "/auth/forgot_password",
    element: <ForgotPassword />,
  },
  {
    path: "/auth/reset_password",
    element: <ResetPassword />,
  },
  {
    path: "/auth/secure_account/:token",
    element: <SecureAccount />,
  },
  { path: "/oauth/github/callback", element: <GithubCallback /> },
  { path: "/oauth/linkedin/callback", element: <LinkedinCallback /> },

{ path: "/home", element: 
<Home /> },

  {
    path: "*",
    element: <div>404 - Page Not Found</div>,
  },
]);

const App = () => (
  <>
    <RouterProvider router={router} />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(
 <App />
);
