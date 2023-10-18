import { NavLink } from "react-router-dom";
import logoPic from "/logo-light.png"


const Navbar = () => {
  const navLinks = (
    <>
      <li className="uppercase">
        <NavLink className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold" : "")} to="/">
          Home
        </NavLink>
      </li>
      <li className="uppercase">
        <NavLink className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold" : "")} to="/addProducts">
          Add Product
        </NavLink>
      </li>

      <li className="uppercase">
        <NavLink className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold" : "")} to="/about">
          My Cart
        </NavLink>
      </li>

      <li className="uppercase">
        <NavLink className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold" : "")} to="/addbrand">
          Add Brand
        </NavLink>
      </li>

      {/* {user ? (
            <>
              <li className="uppercase">
                <NavLink
                  className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold" : "")}
                  to="/profile"
                >
                  Profile
                </NavLink>
              </li>
              <li className="uppercase">
                <NavLink
                  className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold" : "")}
                  to="/booked"
                >
                  Booked Event
                </NavLink>
              </li>
            </>
          ) : (
            ""
          )} */}
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 bg-red-500">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl"><img src={logoPic} alt="" /></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Log In</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
