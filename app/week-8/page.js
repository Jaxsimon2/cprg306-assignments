"use client"
import Link from "next/link";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";
import { useState } from "react";

export default function Page(){
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState();

    const handleAddItem = (addItem) =>{
        setItems([...items, addItem])
    };

    const handleItemSelect = () => {
        items.trim();
        const itemName = items.split();
        items.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
        itemName = itemName[0];
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