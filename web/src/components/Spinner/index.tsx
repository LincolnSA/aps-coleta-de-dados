const Spinner = () => {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: `100vh` }}
    >
      <div
        className="spinner-border text-success"
        role="status"
        style={{ width: "4rem", height: "4rem" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export { Spinner };
