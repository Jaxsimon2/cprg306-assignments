export default function Item({ name, quantity, category}){
    return(
        <section className="m-5 w-96 bg-slate-900 p-2 border-2 border-slate-300">
            <h3 className="text-xl font-bold text-sky-800">{name}</h3>
            <p>Buy {quantity} in {category}</p>
        </section>
    );
}