import React, { useState } from 'react';

function ExampleUseStateComponent() {
    const [name, setName] = useState();
    const [age, setAge] = useState(0); // Default value of age is 0
    const [inputValue, setInputValue] = useState(''); // Default value of inputValue is an empty string]

    const updateName = () => {
        setName('David');
    }

    const updateAge = () => {
        setAge(inputValue);
    }

    return (
        <div>
            <p>name: {name}</p>
            <button onClick={updateName}>Update Name</button>
            <input placeholder="Enter your age" value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
            <p>age: {age}</p>
            <button onClick={updateAge}>Update Age</button>
        </div>
    );
}

export default ExampleUseStateComponent;