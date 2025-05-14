import React from "react";
import { useLoaderData } from "react-router";

const CoffeeDetails = () => {
  const data = useLoaderData();
  console.log(data);
  return <div>coffee details</div>;
};

export default CoffeeDetails;
