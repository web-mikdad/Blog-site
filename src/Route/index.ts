// src/routes/router.tsx
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
      // 🏠 Home page
      {
        index: true,
        Component: Main,
      },

      // 👤 About pages
      {
        path: "aboutpage",
        Component: AboutPage,
      },
      {
        path: "subaboutpage",
        Component: SubAboutPage,
      },

      // 📞 Contact
      {
        path: "contact",
        Component: Contact,
      },

      // 🔐 Authentication
      {
        path: "signup",
        Component: SignUpPage,
      },
      {
        path: "loginpage",
        Component: LoginPage,
      },

      // 📰 Blog section
      {
        path: "blog",
        Component: BlogPage,
      },
      {
        path: "blog/:id",
        Component: BlogDetails,
      },

      // 🧑‍💻 Services section
      {
        path: "services",
        Component: Services,
      },
      {
        path: "services/:slug",
        Component: ServiceDetails,
      },

      // 💼 Booking form (dynamic)
      {
        path: "book-service/:serviceName?",
        Component: BookService,
      },
    ],
  },
]);
