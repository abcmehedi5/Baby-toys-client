import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../Layout/Main";
import AllToys from "../pages/AllToys/AllToys";
import AddToys from "../pages/AddToys/AddToys";
import MyToys from "../pages/MyToys/MyToys";
import Login from "../pages/Login/Login";
import SingUp from "../pages/SingUp/SingUp";
import PrivateRouter from "./PrivateRouter";
import VIewDetails from "../pages/Home/VIewDetails/VIewDetails";
import Blog from "../pages/Blog/Blog";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/all_toys",
        element: (
          <PrivateRouter>
            <AllToys></AllToys>
          </PrivateRouter>
        ),
      },
      {
        path: "add_toy",
        element: (
          <PrivateRouter>
            <AddToys></AddToys>
          </PrivateRouter>
        ),
      },
      {
        path: "my_toys",
        element: (
          <PrivateRouter>
            <MyToys></MyToys>
          </PrivateRouter>
        ),
      },
      {
        path: "toy/:id",
        element: (
          <PrivateRouter>
            <VIewDetails></VIewDetails>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`https://baby-toys-server.vercel.app/toy/${params.id}`),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "singup",
        element: <SingUp></SingUp>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

export default router;
