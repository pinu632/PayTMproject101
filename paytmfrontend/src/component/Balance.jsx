export function Balance({value}){
    return <div className="flex gap-3 p-3 bg-slate-100">
        <div className="font-semibold">
            Your balance is:
        </div>
        <div className="font-semibold"> 
            {value}
        </div>
    </div>
}