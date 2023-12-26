import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Loading from "../pages/Loading";

export const MainLayout = () => {
  const navigation = useNavigate(); 
  return (
    <div className="main-layout">
      <header>
        <h1>React Router</h1>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="help">Help</NavLink>
          <NavLink to="users">Users</NavLink>
        </nav>
      </header>

      <main>
        {navigation.state === "loading" && <Loading />}
        <Outlet />
      </main>
    </div>
  );
};
