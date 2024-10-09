"use client"
import Link from "next/link";
import NewItem from "./new-item";

export default function Page(){

    return(
        <main>
            <Link href="/" className="m-2">Home</Link>
            <NewItem/>
        </main>
    );
}