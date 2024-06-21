import React, { useState } from 'react';

function ExampleUpdateArrays() {

    const [foods, setFoods] = useState(['apple', 'banana', 'cherry']);

    function handleAddFood() {

        const newFood = document.getElementById('foodInput').value;
        document.getElementById('foodInput').value = '';

        setFoods(prevFoods => [...prevFoods, newFood]);
    }

    function handleRemoveFood(index) {

        console.log(index);

        if (index === undefined || index === null) {
            const foodToDelete = document.getElementById('foodInputDeletion').value;
            document.getElementById('foodInputDeletion').value = '';

            setFoods(prevFoods => prevFoods.filter(food => food !== foodToDelete));
        } else {
            setFoods(prevFoods => prevFoods.filter((_, i) => i !== index));
        }
        
    }

    return (
        <div>
            <h2>My favorite foods:</h2>
            <ul>
                {foods.map((food, index) => (
                    <li key={index} onClick={() => handleRemoveFood(index) }>Index({index}) - {food}</li>
                ))}
            </ul>
            <input type="text" id="foodInput" placeholder="Enter a food" />
            <button onClick={handleAddFood}>Add Food</button>
            <input type="text" id="foodInputDeletion" placeholder="Enter a food to delete" />
            <button onClick={handleRemoveFood}>Remove Food</button>
        </div>
    );
}

export default ExampleUpdateArrays;