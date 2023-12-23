import { useLoaderData, Link } from "react-router-dom";

export const Users = () =>
{
    const users = useLoaderData();
    return (
      <div className="UsersContainer">
        {users.map((use) => (
          <div className="ContentContainer">
            <p>
              <i className="fa-solid fa-hand-point-right"></i>
              {use.name}
            </p>
            <Link to={use.id.toString()} key={use.id}>
              <i className="fa-solid fa-bars"></i>
            </Link>
          </div>
        ))}
      </div>
    );
}

export const usersLoader = async () =>
{
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    return res.json();
}