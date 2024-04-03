import { Heading } from "../component/heading"
import { SubHeading } from "../component/subheading"
import { InputBox } from "../component/input"
import { Button } from "../component/button"
import { BottomWarning } from "../component/Bottomwarning"
import { useState } from "react"
import axios from "axios"
export function Signup(){
    const [firstName, setFirstName] =useState("");
    const [lastName,setLastName] = useState("");
    const [username,SetUsername] = useState("");
    const [password,SetPassword] = useState("");
    const [message,SetMessage]= useState('');


    return <div className="bg-slate-300 h-screen flex justify-center items-center p-3">
        <div className="justify-center bg-white w-2/6  flex jutify-center rounded-md shadow-xl p-3 pt-5" style={{height:"40rem"}}>
            <div className="flex flex-col gap-5 ">
            <Heading label={"Sign Up"}></Heading>
            <SubHeading label={"Enter your information to create an account"}/>
            <InputBox heading={"First Name"} placeholder={"John"} onchange={e=>{
                setFirstName(e.target.value);
            }}/>
            <InputBox heading={"Last Name"} onchange={e=>{
                setLastName(e.target.value);
            }}  placeholder={"Doe"}/>
            <InputBox heading={"Email"} onchange={e=>{
                SetUsername(e.target.value);
            }} placeholder={"abc@example.com"}/>
            <InputBox heading={"Password"} 
            onchange={e=>{
                SetPassword(e.target.value);
            }} placeholder={""}/>
            <Button prop={"Sign Up"}  onClick={()=>{
                axios.post("http://localhost:3000/api/v1/user/signup",{
                    username,
                    firstName,
                    lastName,
                    password,
                })
                .then(response=>{
                    SetMessage(response.data.msg);
                    setFirstName('');
                    setLastName('');
                    SetUsername('');
                    SetPassword('');
                    localStorage.setItem("token",response.data.token);
                })
            }}/>
            <BottomWarning label={"Already have an account?"} ButtonText={"sign In"} to={"/SignIn"}/>
            <div className="text-center text-red-500">{
               message
            }</div>
            

            </div>
        </div>
        

    </div>
}