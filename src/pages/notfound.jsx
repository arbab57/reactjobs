import React from "react";
import { Link } from "react-router-dom";

const notfound = () => {
  return (
    <div className="text-center flex flex-col gap-3 justify-center items-center py-20">
      <h1 className="text-6xl ">404 Not Found</h1>
      <Link className="px-6 py-2 bg-black text-white rounded-md" to="/">
        GO Back
      </Link>
    </div>
  );
};

export default notfound;
