import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const handleLogout = () => {
    logOut()
      .then()
      .catch((error) => {
        console.error(error);
      });
  };

  const navItems = (
    <>
      <li>
        <Link>Home</Link>
      </li>
      <li>
        <Link>About</Link>
      </li>
      <li>
        <Link to="/alltoy">All Toy</Link>
      </li>
      <li>
        <Link>Add A Toy</Link>
      </li>
      <li>
        <Link>Blogs</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 max-w-[1140px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl">
            <img
              className="h-10"
              src="https://w7.pngwing.com/pngs/715/843/png-transparent-toy-graphy-illustration-toys-daquan-child-baby-photography.png"
              alt=""
            />
            <div className="font-extrabold text-2xl">
              <span className="text-orange-500">Toy</span>
              <span className="text-lime-500">Universe</span>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          <div className="">
            <div className="tooltip  tooltip-left" data-tip={user?.displayName}>
              {user?.photoURL ? (
                <img className="h-12 w-12 rounded-full" src={user.photoURL} />
              ) : (
                user && <FaUserCircle className="h-12 w-12" />
              )}
            </div>
          </div>
          {user ? (
            <Link onClick={handleLogout} className="btn mx-5">
              Log Out
            </Link>
          ) : (
            <Link className="btn mx-5" to="/login">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
