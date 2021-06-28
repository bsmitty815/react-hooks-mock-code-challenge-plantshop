import React, {useState} from "react";

const allThePlants = "http://localhost:6001/plants"

function NewPlantForm( {setPlants} ) {
  const [newPlantData, setNewPlantData] = useState({ //setting up the opject for the new plant data in State
    name: "",
    image: "",
    price: 0
  })

  function handleChange(event) {//adding the new plant data to State
    setNewPlantData({
      ...newPlantData,
      [event.target.name]: event.target.value,
    })
  }

  function newPlantSubmitClicked(event) { //posting the new plant
    event.preventDefault()

    fetch(allThePlants, {
      method: 'Post',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: newPlantData.name,
        image: newPlantData.image,
        price: parseInt(newPlantData.price)
      })
    })

    fetch(allThePlants)
      .then(response => response.json())
      .then(plantsData => {
        setPlants(plantsData) // fetching the new data and then using a callback function
      })                      // to add it to the array in plantPage.js
    
  }


  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={newPlantSubmitClicked}>
        <input onChange={handleChange} type="text" name="name" placeholder="Plant name" />
        <input onChange={handleChange} type="text" name="image" placeholder="Image URL" />
        <input onChange={handleChange} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
