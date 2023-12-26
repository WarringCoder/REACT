import { useLoaderData, Link } from "react-router-dom";

export const Users = () =>
{
    const users = useLoaderData();
    return (
      <div className="UsersContainer">
        {users.map((use) => (
          <div className="ContentContainer" key={use.id}>
            <p>
              <i className="fa-solid fa-hand-point-right"></i>
              {use.name}
            </p>
            <Link to={use.id.toString()}>
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
    if (res.status === 404) 
    {
      throw new Response("Kaynak bulunamadı", { status: 404 });
    }
    return res.json();
}