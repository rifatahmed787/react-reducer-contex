import { createBrowserRouter } from "react-router-dom";
import Main from "./layout/Main";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
    ],
  },
]);
export default routes;
