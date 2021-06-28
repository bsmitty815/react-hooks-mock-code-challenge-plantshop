import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

const allThePlants = "http://localhost:6001/plants"

function PlantPage() {
  const [plants, setPlants] = useState( [] ) //State for the array of plants
  const [search, setSearch] = useState('') //State for the search term
  

  useEffect(() => { // inital search of plants
    fetch(allThePlants)
    .then(response => response.json())
    .then(plantsData => {
      setPlants(plantsData)
    })


  }, [])


  function searchPlant(searchTerm) { //this gets the search term and sets its State
    setSearch(searchTerm)
  }

  const newSearch = plants.filter((plant) => { //im setting up a new variable so that i dont destroy the original array of plants
    return plant.name.toLowerCase().includes(search.toLowerCase())
  })


  return (
    <main>
      <NewPlantForm setPlants={setPlants} />
      <Search searchPlant={searchPlant} />
      <PlantList plants={newSearch} />
    </main>
  );
}

export default PlantPage;
