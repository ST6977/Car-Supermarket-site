import React, { useEffect, useState } from "react";
import VehicleCard from "../Vehicle/VehicleCard";

const Vehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  useEffect(() => {
    fetch("https://peaceful-anchorage-11931.herokuapp.com/Garis")
      .then((res) => res.json())
      .then((data) => setVehicles(data));
  }, []);
  return (
    <div className="container text-center">
      <h1 className="text-success">Buy Car From Our SuperShop</h1>

      <div className="row">
        {vehicles.map((vehicle) => (
          <VehicleCard key={vehicle._id} vehicle={vehicle}></VehicleCard>
        ))}
      </div>
    </div>
  );
};

export default Vehicles;
