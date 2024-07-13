import React, { useState } from "react";
import Jobcard from "./jobcard";
import Showalljobs from "./showalljobs";

const jobssection = ({ isHome }) => {
  let jobs = [
    {
      time: "Full-Time",
      title: "Senior React Developer",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero deleniti et animi dolore adipisci, minima qui porro dolorem quia cumque quibusdam, quod optio repellendus aliquam doloremque, cupiditate reiciendis ullam excepturi.",
      salary: "$70k - $80k / Year",
      location: "Boston, MA",
    },
    {
      time: "Full-Time",
      title: "Senior React Developer",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero deleniti et animi dolore adipisci, minima qui porro dolorem quia cumque quibusdam, quod optio repellendus aliquam doloremque, cupiditate reiciendis ullam excepturi.",
      salary: "$70k - $80k / Year",
      location: "Boston, MA",
    },
    {
      time: "Full-Time",
      title: "Senior React Developer",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero deleniti et animi dolore adipisci, minima qui porro dolorem quia cumque quibusdam, quod optio repellendus aliquam doloremque, cupiditate reiciendis ullam excepturi.",
      salary: "$70k - $80k / Year",
      location: "Boston, MA",
    },
    {
      time: "Full-Time",
      title: "Senior React Developer",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero deleniti et animi dolore adipisci, minima qui porro dolorem quia cumque quibusdam, quod optio repellendus aliquam doloremque, cupiditate reiciendis ullam excepturi.",
      salary: "$70k - $80k / Year",
      location: "Boston, MA",
    },
    {
      time: "Full-Time",
      title: "Senior React Developer",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero deleniti et animi dolore adipisci, minima qui porro dolorem quia cumque quibusdam, quod optio repellendus aliquam doloremque, cupiditate reiciendis ullam excepturi.",
      salary: "$70k - $80k / Year",
      location: "Boston, MA",
    },
    {
      time: "Full-Time",
      title: "Senior React Developer",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero deleniti et animi dolore adipisci, minima qui porro dolorem quia cumque quibusdam, quod optio repellendus aliquam doloremque, cupiditate reiciendis ullam excepturi.",
      salary: "$70k - $80k / Year",
      location: "Boston, MA",
    },
  ];
  const [show, setShow] = useState(3);
  let jobsTOMap = isHome ? jobs.slice(0, show) : jobs;

  return (
    <section className="bg-sky-100 md:px-20 sm:px-10 px-3 py-10 gap-4">
      <h2 className="text-3xl font-bold text-indigo-600  text-center">
        Browse Jobs
      </h2>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 py-10">
        {jobsTOMap.map((job, index) => {
          return <Jobcard key={index} job={job} />;
        })}
      </div>
    </section>
  );
};

export default jobssection;
