import React from "react";
import { Link } from "react-router-dom";

const card = (props) => {
  let colorBtn =
    "text-white px-3 py-2 rounded-md hover:scale-110 trainsition duration-100 " +
    props.btnColor;
  let classCard =
    "col-span-1 p-7 flex flex-col gap-4 items-start rounded-md shadow-md " +
    props.cardColor;

  return (
    <div className={classCard}>
      <h2 className="text-black font-bold text-2xl">{props.cardTitle}</h2>
      <h3 className="text-black font-medium text-base">{props.cardSub}</h3>
      <Link className={colorBtn} to={props.link}>
        {props.cardBtnText}
      </Link>
    </div>
  );
};

export default card;
