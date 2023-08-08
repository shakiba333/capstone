import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";

export default function NavBar({ user, setUser }) {
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