import { useState } from "react"
import { Appbar } from "../component/Appbar"
import { Balance } from "../component/Balance"
import { Users } from "../component/userComponent"
import axios, { Axios } from "axios"
export function Dashboard(){

    const [balance,setBalance] = useState("1007")
    axios.get("http://localhost:3000/api/v1/account/balance",{
        headers:{
            Authorization:"Bearer "+ localStorage.getItem("token")
        }
    })
    .then(response =>{
        setBalance(response.data.balance)
    })
    return <div className="flex justify-center  h-screen w-screen  bg-white overflow-auto">
        <div  className="w-2/3">
        <Appbar/>
        <Balance value={balance}/>
        <div className="mt-3 ">
        <Users/>

        </div>
        

        </div>
        


    </div>
}