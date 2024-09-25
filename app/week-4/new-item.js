"use client"
import {useState} from "react";

export default function NewItem(){
    const [quantity, setCount] = useState(1);

    const increment = () => {
        if (quantity < 20) {setCount(quantity+1);} }
    
    const decrement = () => {
        if (quantity > 1) {setCount(quantity-1);}}
    

    return(
        <main className="flex justify-center">
            <div className="flex justify-center mt-4 w-40 h-12 bg-slate-100 p-1">
                <p className="mt-2 mr-10 text-slate-950 ">{quantity}</p>
                <button disabled={quantity===1} className="m-1 h-8 w-8 bg-slate-600 rounded-md hover:bg-slate-800 disabled:bg-slate-300" onClick={decrement}>-</button>
                <button disabled={quantity===20} className="m-1 h-8 w-8 bg-slate-600 rounded-md hover:bg-slate-800 disabled:bg-slate-300" onClick={increment}>+</button>
            </div>
        </main>
    );
}