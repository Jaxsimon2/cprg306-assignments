import Link from "next/link";
import ItemList from "./item-list";

export default function Page(){
    
    return(

        <main className="m-4">
            <Link href="/" className="text-lg">Home</Link>
            <h1 className="text-3xl font-bold">Shopping</h1>
            <ItemList/>
            
        </main>

    );
}