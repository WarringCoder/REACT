import './App.css';
import { createBrowserRouter ,RouterProvider } from 'react-router-dom';

// paces
import Home from './pages/home/home';
import Create from './pages/create/create';
import Details from './pages/details/Details';
import Search from './pages/search/search';

// layouts
import MainLayout from './Layout/MainLayout';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path:"/tarifler", element: <Home/>},
      { path: "/create", element: <Create /> },
      { path: "/tarifler/:id", element: <Details /> },
      { path: "/search", element: <Search /> },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={routes}/>
  );
}

export default App;
