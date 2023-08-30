import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import Root from "./Root";

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
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
