import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const NavbarLinks = (
    <div className="lg:flex items-center gap-4">
      <NavLink className="btn" to="/Home">
        {' '}
        Home{' '}
      </NavLink>

      <NavLink className="btn" to="/ListedBook">
        {' '}
        Listed Books{' '}
      </NavLink>

      <NavLink className="btn" to="/ReadPage">
        {' '}
        Pages to Read{' '}
      </NavLink>
    </div>
  );

  return (
    <div className="bg-gray-100">
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {NavbarLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl font-bold">Book Vibe</a>
        </div>
        <nav className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{NavbarLinks}</ul>
        </nav>
        <div className="navbar-end ">
          <a className="btn bg-[#23BE0A] text-white">Sing In</a>
          <a className="btn bg-[#59C6D2] ml-2 text-white">Sing Up</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
