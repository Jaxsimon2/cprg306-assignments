"use client"
import Item from "./item";
import { useState } from "react";


export default function ItemList({items, onItemSelect}){

    const[sortBy, setSortBy] = useState("name");
    
    
    if (sortBy === "name"){
        items.sort((a, b) => a.name.localeCompare(b.name));
    }
    if (sortBy === "category"){
        items.sort((a, b) => a.category.localeCompare(b.category));
    }
    

    const sortName = () => {
        setSortBy("name");
    };

    const sortCategory = () => {
        setSortBy("category");
    };


    return(
    <main>
        <button className="m-5 bg-slate-500 p-2 border-2 border-slate-300" onClick={sortName}>Sort by Name</button>
        <button className="m-5 bg-slate-500 p-2 border-2 border-slate-300" onClick={sortCategory}>Sort by Category</button>
        <ul>
            {items.map((item) => (
                <Item onClick={onItemSelect} key={item.id}
                name={item.name}
                quantity={item.quantity}
                category={item.category}
                onSelect={() => onItemSelect(item)}/>
            ))}
        </ul>
    </main>
      );

}