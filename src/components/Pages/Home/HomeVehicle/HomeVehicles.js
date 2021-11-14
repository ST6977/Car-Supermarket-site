import React, { useEffect, useState } from "react";
import HomeVehicle from "./HomeVehicle";

const HomeVehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  useEffect(() => {
    fetch("https://peaceful-anchorage-11931.herokuapp.com/Garis")
      .then((res) => res.json())
      .then((data) => setVehicles(data));
  }, []);
  return (
    <div className="container text-center">
      <h1 className="text-success">Buy Your Dream Car</h1>
      <p>WE LOVE OUR CARS. </p>
      <div className="row">
        {vehicles.slice(0, 6).map((vehicle) => (
          <HomeVehicle key={vehicle._id} vehicle={vehicle}></HomeVehicle>
        ))}
      </div>
    </div>
  );
};

export default HomeVehicles;
