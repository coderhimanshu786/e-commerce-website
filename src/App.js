import "./App.css";
 import Signup from "./features/auth/components/Signup";
 import Home from './pages/HomePage';
 import LoginPage from './pages/LoginPage';

import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  // Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home></Home>),
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>
  },
  {
    path: "/Signup",
    element: <Signup></Signup>
  }
]);

export default function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
