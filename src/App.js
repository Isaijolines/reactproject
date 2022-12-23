import { useState } from "react";
import BookCreate from "./components/BookCreate";
function App(){
    const [books, setbooks] = useState([])
    
    const createBook = (title) => {
        console.log(`el titulo es ${title}`)
    };

    return (<div> 
        <BookCreate onCreate={createBook}/> 
    </div>);
}

export default App;

