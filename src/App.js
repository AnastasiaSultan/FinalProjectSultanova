import './App.css';
import {LeftBar} from "./components/LeftBar";
import RightBar from "./components/RightBar";
import {useEffect, useState} from "react";

function App() {
    const [book, setBook] = useState(); 

    useEffect(() => {
        document.title = 'Укажите название книги'
    }, [])

    return (
        <div className="app">
        <LeftBar setBook={setBook}/>
        <RightBar book={book}/>
        </div>
    );
}

export default App;
