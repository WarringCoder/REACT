import { NavLink, Outlet } from "react-router-dom";

export const MainLayout = () => {
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
        <Outlet />
      </main>
    </div>
  );
};
