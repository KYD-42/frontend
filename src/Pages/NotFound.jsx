import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="notFoundPage">
      <h1>404</h1>
      <p>Page not found</p>
      <Link to="/">
        <button className="button">Go back!</button>
      </Link>
    </section>
  );
}

export default NotFound;