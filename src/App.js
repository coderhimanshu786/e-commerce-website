import "./App.css";
 import SignupPage from "./pages/SignupPage";
import CartPage from "./pages/CartPage";
 import Home from './pages/HomePage';
 import LoginPage from './pages/LoginPage';
 import CheckoutPage from "./pages/CheckoutPage";

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
    path: "/signup",
    element: <SignupPage></SignupPage>
  },
  {
    path: "/cart",
    element: <CartPage></CartPage>
  },
  {
    path: "/checkout",
    element: <CheckoutPage></CheckoutPage>
  }
]);

export default function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
