import React from "react";
import Hero from "../components/hero";
import Cardsection from "../components/cardsection";
import Jobsection from "../components/jobssection";
import Showalljobs from "../components/showalljobs";

const homepage = () => {
  return (
    <>
      <Hero />
      <Cardsection />
      <Jobsection isHome={true} />
      <Showalljobs />
    </>
  );
};

export default homepage;
