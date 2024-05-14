import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './pages/HomePage';
import BookPage from './pages/BookPage';
import MoviePage from './pages/MoviePage';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavBarComponents from './components/NavBarComponents';
import FooterComponents from './components/FooterComponet';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
  },
  {
    path: "/livro",
    element: <BookPage/>
  },
  {
    path: "/filme",
    element: <MoviePage/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    <NavBarComponents/>
    <RouterProvider  router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
