import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import CategoryList from "../CategoryList/CategoryList";

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
          <CategoryList
            categories={categories}
            activeCat={activeCat}
            setActiveCat={setActiveCat}
          />
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
