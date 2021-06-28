import React, {useState} from "react";

function PlantCard( {plant} ) {
  const [showStock, setShowStock] = useState(true) //set up State to switch the button text

  function buttonClicked() {
    //switching the button text
    setShowStock((showStock) => !showStock)
  }
  
  //passing through the plant information from it being mapped in the last component
  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {showStock ? (
        <button onClick={buttonClicked} className="primary">In Stock</button>
      ) : (
        <button onClick={buttonClicked}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
