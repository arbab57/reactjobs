import React from "react";
import Card from "./card";

const cardsection = () => {
  return (
    <section>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 sm:px-20 px-3 py-12 ">
        <Card
          cardTitle="For Developers"
          cardSub="Browse our react jobs and start your career today"
          cardBtnText="Browse Jobs"
          btnColor="bg-slate-950"
          cardColor="bg-neutral-200"
          link="/jobs"
        />
        <Card
          cardTitle="For Employers"
          cardSub="List your jobs to find the perfect developer for the role"
          cardBtnText="Add Jobs"
          btnColor="bg-indigo-600"
          cardColor="bg-indigo-100"
          link="/add-job"
        />
      </div>
    </section>
  );
};

export default cardsection;
