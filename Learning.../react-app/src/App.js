// / => <Home />
// /home => <Home />
// /about => <About />
// /products => <Products />

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Help/Contact";
import { Faq } from "./pages/Help/Faq";

// Layout
import { MainLayout } from "./layouts/MainLayout";
import { HelpLayout } from "./layouts/Helplayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      { 
        path: 'help',
        element: <HelpLayout />,
        children: [
          {path: "contact", element: <Contact />},
          {path: "faq", element: <Faq />}
        ]
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
