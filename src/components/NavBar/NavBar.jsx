import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
export default function NavBar({
  user,
  setUser,
  categories,
  activeCat,
  setActiveCat,
}) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      {
        <>
          <Link to="/home">Home</Link>
          &nbsp; | &nbsp;
          {categories.map((category) => (
            <Link
              key={category}
              to={`/categories/${category}`}
              className={category === activeCat ? "active" : ""}
              onClick={() => setActiveCat(category)}
            >
              {category} &nbsp; | &nbsp;
            </Link>
          ))}
        </>
      }
      {user ? (
        <>
          <span>Welcome, {user.name}</span>
          &nbsp; | &nbsp;
          <Link to="" onClick={handleLogOut}>
            Log Out
          </Link>
        </>
      ) : (
        <>
          <Link to="/auth">Signup</Link>
          &nbsp;&nbsp;
        </>
      )}
    </nav>
  );
}
