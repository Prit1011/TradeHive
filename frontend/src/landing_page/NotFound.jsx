import React from "react";

function NotFound() {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}
    >
      <div className="text-center px-4">
        <h1 className="display-1 fw-bold text-primary">404</h1>
        <p className="fs-3">
          <span className="text-danger">Oops!</span> Page not found.
        </p>
        <p className="lead">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <a href="/" className="btn btn-outline-primary mt-3 px-4 py-2">
          Go Home
        </a>
      </div>
    </div>
  );
}

export default NotFound;
