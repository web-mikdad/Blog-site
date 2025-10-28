import { createBrowserRouter } from "react-router";
import { Headerpage } from "../components/Layout/FrontLayout";
import BlogPage from "../components/Blog/BlogPage";
import { Main } from "../MainSection";
// import SignUpPage from "../components/Auth/SignIn";
// import LoginPage from "../components/Auth/Login";
import AboutPage from "../Pages/AboutPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Headerpage,
    children:[
      {
        index: true,
        Component:Main
      },
      {
        path:"/aboutpage",
        Component:AboutPage
      },
      {
        path:"/",
        Component:BlogPage
      },
      // {
      //   path:"/Signup",
      //   Component:SignUpPage
      // },
      //  {
      //   path:"/LoginPage",
      //   Component:LoginPage
      
      
    ]
  },
]);
