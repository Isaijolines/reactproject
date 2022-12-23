import { useState } from "react";
function BookCreate({onCreate}){
    const [title, setTitle] = useState('');
   
    const handleChange = (event) =>{
        setTitle(event.target.value);
    };
    const handleSubmit = (event)=>{
        event.preventDefault();
        onCreate(title);
        setTitle('');
    };

    <div className="book-create">
        <h3>Agregar libro</h3>
       <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" value={title} onChange={handleChange} />
        <button className="button">Crear</button>
        </form> 
    </div>
};
 export default BookCreate