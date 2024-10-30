"use client"
import {useState} from "react";

export default function NewItem({onAddItem}){
    const [name, setName] = useState("");
    const [quantity, setCount] = useState(1);
    const [category, setCategory] = useState("produce");

    const increment = () => {
        if (quantity < 20) {setCount(quantity+1);} }
    
    const decrement = () => {
        if (quantity > 1) {setCount(quantity-1);}}
    
    const handleNameChange = (event) => {
        let name = event.target.value;
        name = name.replace(/[^a-zA-Z\s]/g, "");
        setName(name);
    };

    const handleCategoryChange = (event) => {
        let category = event.target.value;
        setCategory(category);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newID = Math.floor(Math.random());
        const newItem = {id: newID, name, quantity, category};
        console.log(newItem);
        onAddItem(newItem);
        
        setName("");
        setCount(1);
        setCategory("produce");
    };

    return(
        <main className="flex flex-wrap justify-center border-white" >
            <form onSubmit={(event => handleSubmit(event))}>
                {/* <label htmlFor="name"></label> */}
                <div>
                    <input
                        required
                        placeholder="Item Name"
                        id="name" 
                        type="text" 
                        value={name} 
                        onChange={(event) => handleNameChange(event)}
                        className="border border-black m-2 text-black"/>
                </div>
                <div>
                    <div className="flex justify-center mt-4 w-40 h-12 bg-slate-100 p-1">
                        <p className="mt-2 mr-10 text-slate-950 ">{quantity}</p>
                        <button type="button" disabled={quantity===1} className="m-1 h-8 w-8 bg-slate-600 rounded-md hover:bg-slate-800 disabled:bg-slate-300" onClick={decrement}>-</button>
                        <button type="button" disabled={quantity===20} className="m-1 h-8 w-8 bg-slate-600 rounded-md hover:bg-slate-800 disabled:bg-slate-300" onClick={increment}>+</button>
                    </div>
                    <select value={category} className="text-black" onChange={(event) => handleCategoryChange(event)}>
                        <option value="" disabled>Category</option>
                        <option value="produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="bakery">Bakery</option>
                        <option value="meat">Meat</option>
                        <option value="frozen-foods">Frozen Food</option>
                        <option value="canned-goods">Canned Goods</option>
                        <option value="dry-goods">Dry Goods</option>
                        <option value="beverages">Beverages</option>
                        <option value="snacks">Snacks</option>
                        <option value="household">Household</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div>
                    <input type="submit" value="Submit" className="flex:1 m-2 bg-slate-600 hover:bg-slate-800"/>
                </div>
                
            </form>

            
        </main>
    );
}