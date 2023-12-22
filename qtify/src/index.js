import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import HomePage from './pages/HomePage';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import AlbumPage from './pages/AlbumPage';
const router=createBrowserRouter(
  [
    {
      path:"/",
      element:<App/>,
      children:[
        {path:"/",
         element:<HomePage/>
        },
        {
          path:"/:albumId",
          element:<AlbumPage/>

        },
        {
          
        }
      ]
    }
  ]
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
  //   <App />
  // </RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
