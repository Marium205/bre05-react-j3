import { useState } from "react";

function List() {
  const [fruits, setFruits] = useState([
    "banane",
    "orange",
    "pomme",
    "citron",
    "mangue",
  ]);

  function removeLastFruit() {
    // on crée un nouveau tableau sans le dernier élément
    let newFruits = fruits.slice(0, fruits.length - 1);
    setFruits(newFruits);
  }

  return (
    <>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>

      <button onClick={removeLastFruit}>Supprimer le dernier fruit</button>
    </>
  );
}

export default List;