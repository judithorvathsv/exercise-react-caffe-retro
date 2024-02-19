const NavBar = () => {
  return (
    <header id="appHeader">
      <nav className="navbar">
        <a className="nav-link active" aria-current="page" href="#hot">
          Hot
        </a>
        <a className="nav-link" href="#juicy">
          Juicy
        </a>
        <a className="nav-link" href="#cosy">
          Cosy
        </a>
      </nav>
    </header>
  );
};
export default NavBar;
