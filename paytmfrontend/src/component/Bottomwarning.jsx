import { Link } from "react-router-dom";
export function BottomWarning({label,ButtonText,to})
{
    return <div className="flex justify-center font-semibold text-lg text-slate-700 gap-2">
        <div>{label}</div>
        <div>
            <Link to={to}>
                {ButtonText}
            </Link>
        </div>

    </div>

}
