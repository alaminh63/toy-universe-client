import { useContext } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../../Context/AuthProvider";
import { NavLink } from "react-router-dom";
import "./NavigationBar.css";

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

  return (
    <div className=" font-medium navbar  bg-slate-200   ">
      <div className="max-w-[1140px] mx-auto navbar">
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
              {user ? (
                <>
                  <li>
                    <Link>Home</Link>
                  </li>
                  <li>
                    <Link to="/alltoy">All Toy</Link>
                  </li>
                  <li>
                    <Link to="/addToy">Add A Toy</Link>
                  </li>
                  <li>
                    <Link to="/myToys">My Toys</Link>
                  </li>
                  <li>
                    <Link to="/blogs">Blogs</Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link>Home</Link>
                  </li>
                  <li>
                    <Link to="/alltoy">All Toy</Link>
                  </li>

                  <li>
                    <Link to="/blogs">Blogs</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl ">
            <div className="md:flex">
              <div>
                <img
                  className="md:h-10 h-0"
                  src="https://w7.pngwing.com/pngs/715/843/png-transparent-toy-graphy-illustration-toys-daquan-child-baby-photography.png"
                  alt=""
                />
              </div>
              <div className="font-extrabold md:text-2xl ">
                <span className="text-orange-500">Toy</span>
                <span className="text-lime-500">Universe</span>
              </div>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {user ? (
              <>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active-link" : "link"
                    }
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active-link" : "link"
                    }
                    to="/alltoy"
                  >
                    All Toy
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/addToy"
                    className={({ isActive }) =>
                      isActive ? "active-link" : "link"
                    }
                  >
                    Add A Toy
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/myToys"
                    className={({ isActive }) =>
                      isActive ? "active-link" : "link"
                    }
                  >
                    My Toys
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/blogs"
                    className={({ isActive }) =>
                      isActive ? "active-link" : "link"
                    }
                  >
                    Blogs
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link>Home</Link>
                </li>
                <li>
                  <Link to="/alltoy">All Toy</Link>
                </li>

                <li>
                  <Link to="/blogs">Blogs</Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="navbar-end ">
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
            <Link onClick={handleLogout} className="bg-orange-500 btn md:mx-5">
              Log Out
            </Link>
          ) : (
            <Link className="btn md:mx-5 bg-orange-500" to="/login">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
