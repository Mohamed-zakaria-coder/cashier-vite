import { FaPizzaSlice } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { ImStatsDots } from "react-icons/im";
import { IoIosStats } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { FaChartLine } from "react-icons/fa6";

const links = [
  { to: "/", label: "Menu", icon: AiOutlineHome },
  { to: "/Sales", label: "Sales", icon: IoIosStats },
  { to: "/Stats", label: "Statistics", icon: ImStatsDots },
  { to: "/dashboard", label: "Dashboard", icon: FaChartLine },
];

const Nav = () => (
  <aside className="parent" aria-label="Main navigation">
    <nav className="nav-container">
      <div className="nav-brand"><FaPizzaSlice className="nav-icon" /><span>Counter</span></div>
      {links.map(({ to, label, icon: Icon }) => (
        <NavLink key={to} to={to} end={to === "/"} className="link-container" aria-label={label}>
          <Icon className="icon" aria-hidden="true" />
          <span>{label}</span>
        </NavLink>
      ))}
    </nav>
  </aside>
);

export default Nav;
