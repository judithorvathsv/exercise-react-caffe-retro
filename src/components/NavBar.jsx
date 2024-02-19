import "./Navbar.css";

const NavBar = () => {
  const links = [
    { id: 1, name: "Hot", path: "#hot" },
    { id: 2, name: "Juicy", path: "#juicy" },
    { id: 3, name: "Cosy", path: "#cosy" },
  ];

  return (
    <header id="appHeader">
      <nav className="navbar">
        {links.map((link, index) => {
          return (
            <a className="nav-link" key={link.id} href={link.path}>
              {link.name}
            </a>
          );
        })}
      </nav>
    </header>
  );
};
export default NavBar;
