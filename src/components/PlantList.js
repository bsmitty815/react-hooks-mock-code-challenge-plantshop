import React from "react";
import PlantCard from "./PlantCard";

function PlantList( {plants} ) {
  //passed in the plants and then mapped over them to pass the elements to PlantCard
 const plantElements = () => {
    return plants.map((plant) => {
     return <PlantCard key={plant.id} plant={plant} />
    }) 
  }
  return (
    
     <ul className="cards">{plantElements()}</ul>
  );
}

export default PlantList;
