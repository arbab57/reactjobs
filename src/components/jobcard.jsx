import React from "react";
import { useState } from "react";
import { FaMapMarker } from "react-icons/fa";
import { Link } from "react-router-dom";

const jobcard = ({ job }) => {
  const [showDesc, setShowDesc] = useState(false);
  let descToShow = job.desc;

  if (!showDesc) {
    descToShow = job.desc.substring(0, 90);
  }
  return (
    <div className="col-span-1 shadow-sm bg-white rounded-md p-5 flex flex-col gap-3 ">
      <p className="text-gray-500 font-semibold">{job.time}</p>
      <h3 className="font-bold text-2xl">{job.title}</h3>
      <div>
        <p className=" text-gray-600">{descToShow}</p>
        <button
          onClick={() => setShowDesc((prev) => !prev)}
          className="text-indigo-600"
        >
          {!showDesc ? "More" : "Less"}
        </button>
      </div>
      <p className="text-indigo-600 font-medium">{job.salary}</p>
      <div className="flex justify-between items-center pt-3 border-t border-gray-300">
        <p className="text-red-600 flex items-center gap-1">
          <FaMapMarker />
          {job.location}
        </p>
        <Link
          to="/jobs"
          className="text-white bg-indigo-600 px-4 py-2 rounded-md"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default jobcard;
