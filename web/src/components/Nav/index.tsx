import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const navigation = useNavigate();

  const userName = localStorage.getItem("userName");
  const isAdmin = localStorage.getItem("userAdmin") === "true";

  const handleLgout = () => {
    localStorage.clear();
    navigation("/");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className=" container-lg">
        <a className="navbar-brand">Olá {userName}!</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarNavDropdown"
          style={{ flexGrow: "inherit" }}
        >
          <ul className="navbar-nav">
            {!isAdmin && (
              <li className="nav-item">
                <Link to="/faqs/new" className="nav-link" type="button">
                  Nova FAQ
                </Link>
              </li>
            )}

            <li className="nav-item">
              <a className="nav-link" type="button" onClick={handleLgout}>
                Sair
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export { Nav };
