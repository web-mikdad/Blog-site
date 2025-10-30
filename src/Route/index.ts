import { createBrowserRouter } from "react-router";
import { Headerpage } from "../components/Layout/FrontLayout";
import BlogPage from "../components/Blog/BlogPage";
import { Main } from "../MainSection";
import SignUpPage from "../components/Auth/SignIn";
import LoginPage from "../components/Auth/Login";
import AboutPage from "../Pages/AboutPage/AboutPage";
import SubAboutPage from "../Pages/AboutPage/SubAboutPage";
import Contact from "../Pages/Contact";
import { Services } from "../Pages/Services";
import { ServiceDetails } from "../Pages/ServiceDetails";
import { BookService } from "../Pages/BookService";
import BlogDetails from "../components/Blog/BlogDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Headerpage,
    children: [
      {
        index: true,
        Component: Main,
      },
      {
        path: "aboutpage",
        Component: AboutPage,
      },
      {
        path: "subaboutpage",
        Component: SubAboutPage,
      },
      {
        path: "contact",
        Component: Contact,
      },
      {
        path: "signup",
        Component: SignUpPage,
      },
      {
        path: "loginpage",
        Component: LoginPage,
      },

      // ✅ Blog list page
      {
        path: "blog",
        Component: BlogPage,
      },

      // ✅ Blog details (dynamic)
      {
        path: "blog/:id",
        Component: BlogDetails,
      },

      // ✅ Services main page
      {
        path: "services",
        Component: Services,
      },

      // ✅ Dynamic service details page
      {
        path: "services/:slug",
        Component: ServiceDetails,
      },

      // ✅ Booking form page
      {
        path: "book-service",
        Component: BookService,
      },

    ],
  },
]);
