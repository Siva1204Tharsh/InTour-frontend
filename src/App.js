import "./App.css";

import Rootlayouts from "./layouts/Rootlayouts";
import Contact from "./screens/Contact";
import Home from "./screens/Home";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "./screens/Login";
import Register from "./screens/Register";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayouts />}>
      <Route index element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="login" element={<Login />} /> 
      <Route path="register" element={<Register />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />

      
    </>
  );
}

export default App;
