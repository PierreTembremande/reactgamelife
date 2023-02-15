import React from 'react';
import './App.css';
import { useState } from 'react';
import { Grille, ComportementGrille } from './composants/Grille/grille';
import Rooot from "./routes/root";
import Inscription from "./routes/Inscription"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Rooot />
  },
  {
    path: "/grille",
    element: <Grille length={50} />
  },
  {
    path: "/SignUp",
    element: <Inscription />
  }
]);

function App() {

  let nb = 0;
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div >
  );

}
export default App;
