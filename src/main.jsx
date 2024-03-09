import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import {
  // createBrowserRouter,
  // RouterProvider,
  HashRouter,
  Routes,
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
import ForSalePage from "./routes/ForSalePage"
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import "./sass/main.scss"

function AppLayout() {
  const [isMenuClicked, setIsMenuClicked] = useState(false)

  const toggleMenu = () => {
    setIsMenuClicked(!isMenuClicked)
  }

  return (
    <>
      <Navbar isMenuClicked={isMenuClicked} toggleMenu={toggleMenu}/>
      <div className={`main-content ${isMenuClicked ? 'blur' : ''}`}>
        <Outlet />
        <Footer />
      </div>      
    </>
  )
}

// const router = createBrowserRouter([
//   {
//     element: <AppLayout />,
//     children: [
//       {
//         path: "/",
//         element: <HomePage />,
//       },
//       {
//         path: "/about",
//         element: <AboutPage />,
//       },
//       {
//         path: "/contractors",
//         element: <ContractorsPage />,
//       },
//       {
//         path: "/faq",
//         element: <FAQPage />,
//       },
//       {
//         path: "/forsale",
//         element: <ForSalePage />,
//       },
//       {
//         path: "/privacypolicy",
//         element: <PrivacyPolicyPage />,
//       },
//       {
//         path: "/sellyourhome",
//         element: <SellYourHomePage />,
//       },
//       {
//         path: "/workwithus",
//         element: <WorkWithUsPage />,
//       },
//     ]
//   }
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contractors" element={<ContractorsPage />} />
        <Route path="faqs" element={<FAQPage />} />
        <Route path="forsale" element={<ForSalePage />} />
        <Route path="privacypolicy" element={<PrivacyPolicyPage />} />
        <Route path="sellyourhome" element={<SellYourHomePage />} />
        <Route path="workwithus" element={<WorkWithUsPage />} />
      </Route>
    </Routes>
  </HashRouter>
)
