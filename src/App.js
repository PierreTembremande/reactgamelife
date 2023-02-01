import React from 'react';
import './App.css';
import { useState } from 'react';
import { Grille, ComportementGrille } from './composants/Grille/grille';
import Rooot from "./routes/root";
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
