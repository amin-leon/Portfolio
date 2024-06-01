import { NavLink } from "react-router-dom"

function NavBar() {
  return (
    <nav>
        <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'text-blue-500' : 'text-gray-500')}
          >
            Home
        </NavLink>
        <NavLink
            to="/aboutme"
            className={({ isActive }) => (isActive ? 'text-blue-500' : 'text-gray-500')}
          >
            About Me
        </NavLink>
        <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? 'text-blue-500' : 'text-gray-500')}
          >
            Projects
        </NavLink>
        <NavLink
            to="/blogs"
            className={({ isActive }) => (isActive ? 'text-blue-500' : 'text-gray-500')}
          >
            Blogs
        </NavLink>
        <NavLink
            to="/skills"
            className={({ isActive }) => (isActive ? 'text-blue-500' : 'text-gray-500')}
          >
            Skills
        </NavLink>
    </nav>
  )
}

export default NavBar