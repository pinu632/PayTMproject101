import { useEffect, useState } from "react"
import { Button } from "./button"
import { InputBox } from "./input"
import axios from "axios"
import { useNavigate } from "react-router-dom"
export function Users()
{
    const [users,setusers] =useState([
       
    ])
    const [filter,setFilter]=useState("");

    useEffect(()=>{
        axios.get("http://localhost:3000/api/v1/user/bulk?filter="+filter)
        .then(response =>{
           setusers(response.data.users)
        })
    },[filter])

    return <div className="flex flex-col gap-3 p-3 ">
        <div className=" font-semibold">
            Users
        </div>
        <div>
          <InputBox placeholder={"search user...."} onchange={(e)=>{
            setFilter(e.target.value);
          }}/>
        </div>

        <div className=" ">
        {users.map(user => <User key={user._id} user={user}/>)} 


        </div>
    </div>
}

function User({user}){
    const navigate = useNavigate();
    return <div className="flex justify-between p-3">
        <div className="flex w-4/6 ">
            <div className="h-10 w-10 text-center p-1 text-xl bg-gray-700 text-white rounded-full font-semibold"> 
            {user.firstname[0]}
            </div>
            <div className="justify-center items-center p-2  font-semibold">
                {user.firstname} {user.lastname}
            </div>
           
        </div>

        <div className="w-1/6">
            <Button onClick={(e)=>{
              navigate("/sendMoney?id=" + user._id + "&name=" +user.firstname); 
            }} prop={"Send Money"}/>

        </div>
    </div>
}