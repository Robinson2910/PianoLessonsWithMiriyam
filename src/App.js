import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import "./css/general.css";
import "./css/header.css";
import Hero from "./components/Hero";
const router = createBrowserRouter([
  {
    element: (
      <>
        <Navbar />
        <Hero />
      </>
    ),
    path: "/",
  },
  {
    element: <Navbar />,
    path: "/about us",
  },
  {
    element: <Navbar />,
    path: "/contact Us",
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
