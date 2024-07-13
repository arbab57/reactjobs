import React from "react";
import { Link } from "react-router-dom";

const showalljobs = (props) => {
  return (
    <div className="flex justify-center bg-sky-100">
      <Link to="/jobs" className="text-white bg-black rounded-md px-5 py-3">
        Show All Jobs
      </Link>
    </div>
  );
};

export default showalljobs;
