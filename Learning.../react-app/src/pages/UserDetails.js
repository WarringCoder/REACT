import { useLoaderData, Link } from "react-router-dom";

export const UserDetails = () => {
  const user = useLoaderData();
  return (
    <div className="UsersDetails">
      <ul>
        <li>
          <i class="fa-solid fa-user"></i>
          {user.username}
        </li>
        <li>
          <i class="fa-solid fa-envelope"></i>
          {user.email}
        </li>
        <li>
          <i class="fa-solid fa-mobile"></i>
          {user.phone}
        </li>
        <li>
          <i class="fa-solid fa-building"></i>
          {user.company.name} / {user.address.city}
        </li>
      </ul>
      <Link to="/users">Back To List</Link>
    </div>
  );
};

export const userDetailsLoader = async ({ params }) => {
  const { userid } = params;
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + userid
  );
  return res.json();
};
