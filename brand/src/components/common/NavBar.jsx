import { NavLink } from "react-router-dom"
import Wrapper from "../../helpers/Wrapper"

function NavBar() {
  return (
    <nav className="pt-3 pb-3 bg-primary-main">
      <Wrapper>
      <div className="links flex justify-between flex-row">
        <div className="flex justify-center items-center">
          <h6 className="text-3xl text-textcolor-secondary font-extrabold">NP Leon</h6>
        </div>
        <div className="menus-login flex gap-10">
          <div className="menus flex items-center gap-1 p-3">
            <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'text-white bg-blue-500 pr-5 pl-5 pt-2 pb-2 rounded-sm text-xs' : 'text-gray-500 pr-5 pl-5 pt-2 pb-2 rounded-sm hover:bg-white text-xs')}
              >
                Home
            </NavLink>
            <NavLink
                to="/aboutme"
                className={({ isActive }) => (isActive ? 'text-white bg-blue-500 pr-5 pl-5 pt-2 pb-2 rounded-sm text-xs' : 'text-gray-500 pr-5 pl-5 pt-2 pb-2 rounded-sm hover:bg-white text-xs')}
              >
                About
            </NavLink>
            <NavLink
                to="/blogs"
                className={({ isActive }) => (isActive ? 'text-white bg-blue-500 pr-5 pl-5 pt-2 pb-2 rounded-sm text-xs' : 'text-gray-500 pr-5 pl-5 pt-2 pb-2 rounded-sm hover:bg-white text-xs')}
              >
                Blogs
            </NavLink>
            <NavLink
                to="/projects"
                className={({ isActive }) => (isActive ? 'text-white bg-blue-500 pr-5 pl-5 pt-2 pb-2 rounded-sm text-xs' : 'text-gray-500 pr-5 pl-5 pt-2 pb-2 rounded-sm hover:bg-white text-xs')}
              >
                Projects
            </NavLink>
            <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? 'text-white bg-blue-500 pr-5 pl-5 pt-2 pb-2 rounded-sm text-xs' : 'text-gray-500 pr-5 pl-5 pt-2 pb-2 rounded-sm hover:bg-white text-xs')}
              >
                Contact
            </NavLink>
          </div>
          <div className="login-section flex justify-center items-center">
            <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? 'text-white bg-blue-500 pr-5 pl-5 pt-2 pb-2 rounded-sm text-xs' : 'text-gray-500 pr-5 pl-5 pt-2 pb-2 rounded-sm hover:bg-white text-xs')}
              >
                Login
             </NavLink>
          </div>
        </div>
      </div>
      </Wrapper>
    </nav>
  )
}

export default NavBar