import { NavLink, Outlet } from "react-router-dom"

export const HelpLayout = () =>
{
    return (
      <div className="HeaderHaelp">
        <h3>Help</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          natus quos maxime perspiciatis, iusto pariatur ducimus itaque, ipsa a
          excepturi, quisquam eos! Cumque unde, quidem maxime deserunt rerum hic
          ipsam molestiae optio sunt nihil.
        </p>
        <nav>
          <NavLink to="Contact">Contact</NavLink>
          <NavLink to="Faq">Faq</NavLink>
        </nav>
        <main>
          <Outlet />
        </main>
      </div>
    );
}