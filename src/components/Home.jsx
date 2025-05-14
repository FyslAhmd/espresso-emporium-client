import React, { useState } from "react";
import { useLoaderData } from "react-router";
import CoffeeCard from "./CoffeeCard";

const Home = () => {
  const data = useLoaderData();
  const [allCoffee, setAllCoffee] = useState(data);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {allCoffee.map((item) => (
          <CoffeeCard
            allCoffee={allCoffee}
            setAllCoffee={setAllCoffee}
            key={item._id}
            data={item}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
