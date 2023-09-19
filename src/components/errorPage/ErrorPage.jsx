import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div>
      <h1>Oops!</h1>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      {error.status === 404 && (
        <div>
          <h3>Page not Found</h3>
          <p>Go back where you from</p>
          <Link to={"/"}>
            <button>Home</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ErrorPage;
