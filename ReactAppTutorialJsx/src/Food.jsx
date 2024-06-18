
function Food(props) {

    const category = props.category;
    const itemList = props.items;

    // Sort the list of fruits by reverse alphabetical order
    itemList.sort((a, b) => {
        if (a.name < b.name) {
            return 1;
        } else {
            return -1;
        }
    });


    const lowCalFruits = itemList.filter((fruit) => fruit.calories < 100);
    const lowCalFruitsList = lowCalFruits.map((fruit) =>
        <li key={fruit.id}>{fruit.name}: <b>{fruit.calories}</b></li>
    );

    const listItem = itemList.map((fruit) =>
        <li key={fruit.id}>{fruit.name}: <b>{fruit.calories}</b></li>
    );

    return (
        <>
            <h1>{category}</h1>
            <ol>{listItem}</ol>
            <h2>Low Calorie Fruits</h2>
            <ol>{lowCalFruitsList}</ol>
        </>
    );
}

export default Food;