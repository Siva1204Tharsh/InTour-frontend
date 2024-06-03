import "./App.css";
import Footer from "./components/Footer";
import Rootlayouts from "./layouts/Rootlayouts";
import Contact from "./screens/Contact";
import Home from "./screens/Home";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayouts />}>
      <Route index element={<Home />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />

      <Footer />
    </>
  );
}

export default App;
