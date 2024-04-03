import { useNavigate } from "react-router-dom";
import { Button } from "./button";

export function Appbar(){

    const navigate = useNavigate();
    return <div className="flex justify-between p-3 shadow bg-slate-300">
        <div className="font-bold font-sans">
            PayTM App
        </div>
        <div className="flex gap-3">
            <div className="font-semibold">
                Hello
            </div>
            <div className="rounded-full bg-white w-7 h-7 text-center ">
                U
            </div>
            <div className="w-2/6">
                <button className="bg-gray-700 text-white rounded-md  w-24 h-8 " onClick={()=>{
                    localStorage.removeItem('token');
                    navigate('/')

                }}>Log Out</button>
            </div>
        </div>
    </div>
}