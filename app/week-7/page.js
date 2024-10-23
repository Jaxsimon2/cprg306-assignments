"use client"
import Link from "next/link";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";

export default function Page(){
    const [items, setItems] = useState(itemsData);

    const handleAddItem = (addItem) =>{
        setItems(...items, addItem)
    };

    return(

        <main className="m-4">
            <Link href="/" className="text-lg">Home</Link>
            <h1 className="text-3xl font-bold">Shopping</h1>
            <NewItem onAddItem={handleAddItem}/>
            <ItemList items={items}/>
         
            
        </main>

    );
}