import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import "./css/general.css";

import HomePage from "./pages/HomePage";

import AboutPage from "./pages/AboutPage";

import FaqPage from "./pages/FaqPage";

import PoliciesPage from "./pages/PoliciesPage";

const router = createBrowserRouter([
  {
    element: (
      <>
        {" "}
        <HomePage />
      </>
    ),
    path: "/",
  },
  {
    element: (
      <>
        <AboutPage />
      </>
    ),
    path: "/about us",
  },
  {
    element: <FaqPage />,
    path: "/faq",
  },
  {
    element: <PoliciesPage />,
    path: "/policies",
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
