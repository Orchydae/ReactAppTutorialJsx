import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button/Button.jsx'
import Student from './Student/Student.jsx'

function App() {
    return (
        <> {/* This is a fragment */}
            <Header />
            <Food />
            <Card />
            <Card />
            <Card />
            <Card />
            <Button />
            <Student name="Spongebob" age={30} isStudent={false} />
            <Student name="Patrick" age="31" isStudent={true} />
            <Student name="Squidward" age={32} isStudent={false} />
            <Student age={33} isStudent={true} />
            <Footer />
        </>
        
    );
}

export default App
