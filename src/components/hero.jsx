import React from "react";

const hero = ({
  title = "Become a React Dev",
  sub = "Find the react job that fits your skills and needs",
}) => {
  return (
    <section className="bg-blue-600 py-24 sm:px-0 px-3 text-center flex flex-col gap-2 ">
      <h1 className="text-white sm:text-6xl text-5xl sm:mb-0 mb-3 font-bold">
        {title}
      </h1>
      <h2 className="text-white text-xl font-medium">{sub}</h2>
    </section>
  );
};

export default hero;
