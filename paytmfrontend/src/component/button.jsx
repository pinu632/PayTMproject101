export function Button({prop,onClick}){
    return <div>
        <button onClick={onClick} className="w-full bg-gray-700 w-full h-10 text-white rounded-md">{prop}</button>

    </div>
}