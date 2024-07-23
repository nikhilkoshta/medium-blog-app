import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignupInput } from "@100xdevs/medium-common";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState<SignupInput>({
        name: "",
        username: "",
        password: ""
    });

    async function sendRequest() {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, postInputs);
            const jwt = response.data;
            localStorage.setItem("token", jwt);
            navigate("/blogs");
        } catch(e) {
            alert("Error while signing up");
            // alert the user here that the request failed
        }
    }
    
    return (
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
            <div className="text-2xl font-bold mb-4">
                {type === "signup" ? "Create an account" : "Sign in to your account"}
            </div>
            <div className="mb-4 text-gray-600">
                {type === "signin" ? "Don't have an account?" : "Already have an account?" }
                <Link className="pl-2 underline text-blue-600 hover:text-blue-800" to={type === "signin" ? "/signup" : "/signin"}>
                    {type === "signin" ? "Sign up" : "Sign in"}
                </Link>
            </div>
            <div>
                {type === "signup" ? <LabelledInput label="Name" placeholder="Nikhil Koshta..." onChange={(e) => {
                    setPostInputs({
                        ...postInputs,
                        name: e.target.value
                    })
                }} /> : null}
                <LabelledInput label="Email" placeholder="username@gmail.com" onChange={(e) => {
                    setPostInputs({
                        ...postInputs,
                        username: e.target.value
                    })
                }} />
                <LabelledInput label="Password" type={"password"} placeholder="123456" onChange={(e) => {
                    setPostInputs({
                        ...postInputs,
                        password: e.target.value
                    })
                }} />
                <button onClick={sendRequest} type="button" className="mt-4 w-full text-white bg-black hover:bg-gray-800 rounded-lg py-2">
                    {type === "signup" ? "Sign up" : "Sign in"}
                </button>
            </div>
        </div>
    );
};

interface LabelledInputType {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

function LabelledInput({ label, placeholder, onChange, type }: LabelledInputType) {
    return (
        <div className="mb-4">
            <label className="block mb-1 text-sm font-semibold text-gray-700">{label}</label>
            <input onChange={onChange} type={type || "text"} className="w-full bg-gray-100 border border-gray-300 rounded-lg p-2" placeholder={placeholder} required />
        </div>
    );
}
