import { useLoaderData, Link, } from "react-router-dom";

export const UserDetails = () => {
  const user = useLoaderData();
  return (
    <div className="UsersDetails">
      <ul>
        <li>
          <i className="fa-solid fa-user"></i>
          <span>{user.username}</span>
        </li>
        <li>
          <i className="fa-solid fa-envelope"></i>
          <span>{user.email}</span>
        </li>
        <li>
          <i className="fa-solid fa-mobile"></i>
          <span>{user.phone}</span>
        </li>
        <li>
          <i className="fa-solid fa-building"></i>
          <span>
            {user.company.name} / {user.address.city}
          </span>
        </li>
      </ul>
      <span className="backlink">
        <Link to="/users">Back To List</Link>
      </span>
    </div>
  );
};

export const userDetailsLoader = async ({ params }) => {
  const { userid } = params;
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + userid
  );
  if (res.status === 404) {
    throw new Response("Kaynak bulunamadı", { status: 404 });
  }
  return res.json();
};
