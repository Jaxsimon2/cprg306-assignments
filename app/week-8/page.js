"use client"
import Link from "next/link";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";
import { useState } from "react";

export default function Page(){
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState(null);

    const handleAddItem = (addItem) =>{
        setItems([...items, addItem])
    };

    const handleItemSelect = (item) => {
        console.log("Selected Item:", item); 
    
        // big function to clean up the item name. Got most of this from Google
        const cleanItemName = (name) => {
            // Remove anything after a comma
            let cleanedName = name.split(',')[0].trim();
    
            // Remove emojis using a regular expression
            cleanedName = cleanedName.replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F800}-\u{1F8FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, '');
    
            // Remove trailing whitespace
            cleanedName = cleanedName.trim();
    
            // Remove the last character if it's an "s" (plural)
            if (cleanedName.endsWith('s')) {
                cleanedName = cleanedName.slice(0, -1);
            }
    
            return cleanedName;
        };
    
        const cleanedName = cleanItemName(item.name);
        setSelectedItemName(cleanedName);
        console.log("Selected Item Name:", cleanedName); 
      };

    return(

        <main className="m-4">
            <Link href="/" className="text-lg">Home</Link>
            <h1 className="text-3xl font-bold">Shopping</h1>
            <ul>
                <NewItem onAddItem={handleAddItem}/>
                <ItemList items={items}
                onItemSelect={handleItemSelect}/>
            </ul>
            <MealIdeas ingredient={selectedItemName}/>
            
        </main>

    );
}