import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import Root from "./Root";
import Cart from "./Cart";

export default function Route() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/shop",
          element: <Shop />,
        },
        {
          path: "/shop/:category",
          element: <Shop />,
        },
        { path: "/cart", element: <Cart /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
