import { createRoot } from 'react-dom/client'
import './index.css'
import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import App from "./App";
import Work from "./pages/Ourwork";
import About from "./pages/About";
// import Articles from "./pages/Articles";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
// import Services from "./pages/Services"; // assuming dropdown or section
import { LandingPage } from './pages/LandingPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>, // Contains the navbar and <Outlet />
    children: [
      { index: true, element: <LandingPage /> },
      { path: "work", element: <Work /> },
      { path: "aboutus", element: <About/> },
      { path: "services", element: <Service /> },
      // { path: "articles", element: <Articles /> },
      { path: "contact", element: <Contact /> },
      // { path: "services", element: <Services /> },
      // this is the trial 
    ],
  },
]);
createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
