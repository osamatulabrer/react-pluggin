
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './assets/pages/Layout';
import Home from "./assets/pages/home";
import About from "./assets/pages/About";
import Contact from "./assets/pages/contact";
import Gallery from "./assets/pages/gallery"
import Error from './assets/pages/ErrorPage';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <Error/>,
    children:
    [{
      path: "/",
      element: <Home/>,
      Home:true
    },
    {
      path: "/About",
      element: <About/>
    },
    {
      path: "/Contact",
      element: <Contact/>
    },
    {
      path: "/Gallery",
      element: <Gallery/>
    }]
  }
]);
createRoot(document.getElementById('root')).render(
 


    <RouterProvider router={router} />

)
