export function InputBox({heading,placeholder,onchange}){
    return <div>
        <h5 className="font-semibold">{heading}</h5>
        <input type="text" onChange={onchange} placeholder={placeholder} className="w-full p-2 border-slate-300 border-2 rounded-md h-10 outline-none b"/>
    </div>
}