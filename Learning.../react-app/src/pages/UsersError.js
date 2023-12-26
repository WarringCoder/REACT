import { useRouteError, Link } from "react-router-dom";

export const UsersError = () =>
{
    const error = useRouteError();
    return(
        <div className="UsersError">
            <h3>ERROR</h3>
            <p>{error.data}</p>
            <Link to="/">Homepage</Link>
        </div>
    )
}