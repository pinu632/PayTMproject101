import { Heading } from "../component/heading"
import { SubHeading } from "../component/subheading"
import { InputBox } from "../component/input"
import { Button } from "../component/button"
import { BottomWarning } from "../component/Bottomwarning"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
export function SignIn(){
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();




    return <div className="bg-slate-300 h-screen flex justify-center items-center p-3">
        <div className="justify-center bg-white w-2/6  flex jutify-center rounded-md shadow-xl p-3 pb-10">
            <div className="flex flex-col gap-5">
                <Heading label={"Sign In"}/>
                <SubHeading label={"Enter your credentials to access your account"}/>
                <InputBox onchange={(e)=>{
                    setUsername(e.target.value)
                }} heading={"Email"} placeholder={"abc@example.com"}/>
                <InputBox heading={"Password"}
                onchange={(e)=>{
                    setPassword(e.target.value)
                }}
                 placeholder={""}/>
                <Button prop={"Sign In"} onClick={()=>{
                    axios.post("http://localhost:3000/api/v1/user/signIn",{
                        username,
                        password
                    })
                    .then(response=>{
                        localStorage.setItem("token",response.data.token)
                        const token = localStorage.getItem("token");
                        if(token){
                            navigate('/dashboard');

                        }
                    })
                }} />
                <BottomWarning label={"Don't have an account?"} ButtonText={"Sign Up"} to={"/SignUp"}/>


            </div>
        </div>
    </div>
}