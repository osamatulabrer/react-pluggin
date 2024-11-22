


import Gellary from "./assets/components/gellary"
import { createRoot } from 'react-dom/client';
import './index.css';
import Root from './assets/pages/Root';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CreateProduct from "./CreateProduct/CreateProduct";
import { CategoryLoader } from "./assets/loder/Loader";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  
    children: [
      {
          path: "/",
          element: <Gellary />,
          index: true,
         
      },
      {
        path:'/create',
        element:<CreateProduct/>
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);





// import { createRoot } from 'react-dom/client'
// import './index.css'
// import Root from './assets/pages/Root';

// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// const router = createBrowserRouter([

//  {
//   path:"/",
//   element:<Root/>,
//   children:{
    
//   }


//  }
// ]);
// createRoot(document.getElementById('root')).render(
 


//     <RouterProvider router={router} />

// )
