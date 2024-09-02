import HomePage from "./components/pages/homepage/homePage";
import Layout from "./components/pages/layout/Layout";
import ListPage from "./components/pages/listPage/ListPage";
import ProfilePage from "./components/pages/profilePage/ProfilePage";
import SinglePage from "./components/pages/singlePage/SinglePage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "list",
          element: <ListPage />,
        },
        {
          path: "/:id",
          element: <SinglePage />,
        },
        {
          path: "list",
          element: <ListPage />,
        },
        {
          path: "profile",
          element: <ProfilePage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
