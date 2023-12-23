import { Outlet, } from "react-router-dom"
export const UsersLayout = () =>
{
    return(
        <div className="usersLayout">
            <h2>Users</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis molestias ut iste quidem assumenda aliquid optio dolores laudantium maiores dicta aspernatur inventore, itaque ipsa dolorem modi voluptate. Optio aspernatur quaerat nulla dolor suscipit illum delectus animi maiores assumenda quia, velit eveniet rerum!</p>
            <Outlet/>
        </div>
    )
}