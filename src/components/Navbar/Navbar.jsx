import { NavLink } from "react-router-dom";

const Navbar = () => {
  const routes = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/about",
      label: "About",
    },
    {
      href: "/order",
      label: "Order Online",
    },
    {
      href: "/reservation",
      label: "Reservation",
    },
    {
      href: "/login",
      label: "Login",
    },
  ];

  return (
    <nav className="flex max-w-7xl mx-auto p-4 bg-transparent text-green-900 justify-between">
      <div>
            <h1 className="font-bold text-2xl font-great-vibes">Little Lemon</h1>
      </div>
      <div>
        {routes.map((route) => (
          <NavLink
            key={route.label}
            to={route.href}
            className="mx-4 hover:underline hover:translate-y-1 transition delay-75"
          >
            {route.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
