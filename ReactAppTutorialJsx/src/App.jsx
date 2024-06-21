import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button/Button.jsx'
import Student from './Student/Student.jsx'
import UserGreeting from './UserGreeting.jsx'
import ExampleUseStateComponent from './ExampleUseStateComponent.jsx'
import ColorPicker from './ColorPicker/ColorPicker.jsx'
import ExampleUpdateObjects from './ExampleUpdateObjects.jsx'
import ExampleUpdateArrays from './ExampleUpdateArrays.jsx'
import ExampleUpdateArrayOfObjects from './ExampleUpdateArrayOfObjects.jsx'

function App() {


    const fruits = [{ id: 1, name: 'Apple', calories: 95 },
    { id: 2, name: 'Banana', calories: 150 },
    { id: 3, name: 'Orange', calories: 11 }];

    return (
        <> {/* This is a fragment */}
            <Header />
            <UserGreeting isLoggedIn={true} username="David" />
            <ExampleUseStateComponent />
            <ExampleUpdateObjects /> <br />
            <ExampleUpdateArrays /> <br />
            <ExampleUpdateArrayOfObjects /> <br />
            <ColorPicker />
            <Food items={fruits} category="Fruits" />
            <Card />
            <Card />
            <Card />
            <Card /> <br/>
            <Button /> <br/>
            <Student name="Spongebob" age={30} isStudent={false} />
            <Student name="Patrick" age="31" isStudent={true} />
            <Student name="Squidward" age={32} isStudent={false} />
            <Student age={33} isStudent={true} />
            <Footer />
        </>
        
    );
}

export default App
