import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1>This is homepage</h1>
      <Link to={"/about"}>About</Link>
    </div>
  );
}
