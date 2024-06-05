import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Styles/custom.css';
import HomePage from './pages/HomePage';
import BookPage from './pages/BookPage';
import MoviePage from './pages/MoviePage';
import NavBarComponents from './components/NavBarComponents';
import FooterComponents from './components/FooterComponet';
import LoginPage  from './pages/LoginPage';
import filme from './pages/FilmePage';
import RegisterPage from './pages/RegisterPage';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import FilmePage from './pages/FilmePage';
import LivroPage from './pages/LivroPage';

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
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/cadastro",
    element: <RegisterPage/>
  },
  {
    path: "/filme/:id",
    element: <FilmePage/>
  },
  {
    path: "/livro/:id",
    element: <LivroPage/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    <NavBarComponents/>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
