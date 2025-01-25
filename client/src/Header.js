import { Link } from "react-router-dom";
import "./App.css";

export default function HomePage() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">MyLogo</Link>
        </div>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
        <div className="nav-actions">
          <button className="btn-login">Login</button>
          <button className="btn-signup">Signup</button>
        </div>
      </div>
    </header>
  );
}
