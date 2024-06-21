import React, { useState } from 'react';

function ExampleUpdateArrayOfObjects() {

    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState('');
    const [carModel, setCarModel] = useState('');

    let selectedCarIndex = -1;

    function handleAddCar() {
        const newCar = {
            year: carYear,
            make: carMake,
            model: carModel
        };

        setCars(prevCars => [...prevCars, newCar]);

        setCarYear(new Date().getFullYear());
        setCarMake('');
        setCarModel('');
    }

    function handleSelectionCar(index) {
        selectedCarIndex = index;
    
    }

    function handleRemoveCar(index) {

        setCars(prevCars => {
            return prevCars.filter((car, i) => i !== index);
        });
    }

    function handleYearChange(event) {
        setCarYear(event.target.value);
    }

    function handleMakeChange(event) {
        setCarMake(event.target.value);
    }

    function handleModelChange(event) {
        setCarModel(event.target.value);
    }

    return (
        <div>
            <h2>List of Car Objects</h2>
            <ul>
                {cars.map((car, index) => (
                    <li key={index} onClick={() => handleSelectionCar(index) }>
                    {car.year} {car.make} {car.model}
                    </li>
                ))}
            </ul>

            <input type="number" value={carYear} onChange={handleYearChange} /> <br />
            <input type="text" value={carMake} onChange={handleMakeChange} placeholder="Enter car make"/> <br />
            <input type="text" value={carModel} onChange={handleModelChange} placeholder="Enter car model" /> <br />
            <button onClick={() => handleAddCar()}>Add Car</button>
            <button onClick={() => handleRemoveCar(selectedCarIndex)}>Remove Car</button>
        </div>
    );
}

export default ExampleUpdateArrayOfObjects;