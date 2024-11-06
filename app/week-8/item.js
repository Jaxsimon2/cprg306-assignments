export default function Item({ name, quantity, category, onSelect, isSelected}){
    return(
        <section className={`m-5 w-96 bg-slate-900 p-2 border-2 border-slate-300 ${isSelected ? "bg-slate-700" : "bg-stone-900"}`}  onClick={onSelect}>
            <h3 className="text-xl font-bold text-sky-800">{name}</h3>
            <p>Buy {quantity} in {category}</p>
        </section>
    );
}