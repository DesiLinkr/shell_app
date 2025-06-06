import ReactDOM from "react-dom/client";
import "./index.css";
import { lazy, Suspense } from "react";
await import("auth_app/styles");

import { createBrowserRouter,
  RouterProvider,} from "react-router-dom";
const SignUp = lazy(() => import("auth_app/sign_up"));
const SignIn = lazy(() => import("auth_app/sign_in"));
const Forgot_password =  lazy(() => import("auth_app/forgot_password"));
const router = createBrowserRouter([

  {
    path: "/sign_up",
    element:
    <SignUp />
  },
  {
    path: "/sign_in",
    element:
    <SignIn />
  },
  {
    path: "/forgot_password",
    element:
    <Forgot_password/>
  },
  
  {
    path: "*",
    element: <div>404 - Page Not Found</div>,
  },
  
]); 

const App = () => (
  <>
    <RouterProvider router={router}  /> 
  </>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);