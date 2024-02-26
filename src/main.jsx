import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom"
import AboutPage from "./routes/AboutPage"
import ContractorsPage from "./routes/ContractorsPage"
import FAQPage from "./routes/FAQPage"
import HomePage from "./routes/HomePage"
import PrivacyPolicyPage from "./routes/PrivacyPolicyPage"
import SellYourHomePage from "./routes/SellYourHomePage"
import WorkWithUsPage from "./routes/WorkWithUsPage"
import HomesForSalePage from "./routes/HomesForSalePage"
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import "./sass/main.scss"

const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
)

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contractors",
        element: <ContractorsPage />,
      },
      {
        path: "/faq",
        element: <FAQPage />,
      },
      {
        path: "/homesforsale",
        element: <HomesForSalePage />,
      },
      {
        path: "/privacypolicy",
        element: <PrivacyPolicyPage />,
      },
      {
        path: "/sellyourhome",
        element: <SellYourHomePage />,
      },
      {
        path: "/workwithus",
        element: <WorkWithUsPage />,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
