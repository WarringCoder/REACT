// / => <Home />
// /home => <Home />
// /about => <About />
// /products => <Products />

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact, contactAction } from "./pages/Help/Contact";
import { Faq } from "./pages/Help/Faq";
import { NotFound } from "./pages/NotFound";
import { Users, usersLoader } from "./pages/Users";
import { UserDetails, userDetailsLoader } from "./pages/UserDetails";
import { UsersError } from "./pages/UsersError";

// Layout
import { MainLayout } from "./layouts/MainLayout";
import { HelpLayout } from "./layouts/Helplayout";
import { UsersLayout } from "./layouts/UsersLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      {
        path: "help",
        element: <HelpLayout />,
        children: [
          { path: "contact", element: <Contact />, action: contactAction },
          { path: "faq", element: <Faq /> },
        ],
      },
      {
        path: "users",
        element: <UsersLayout />,
        errorElement: <UsersError/>,
        children: [
          { index: true, element: <Users />, loader: usersLoader },
          {
            path: ":userid",
            element: <UserDetails />,
            loader: userDetailsLoader,
          },
        ],
      },
      {
        path:"*", element: <NotFound/>
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
