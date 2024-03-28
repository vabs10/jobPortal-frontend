import { Button } from "../components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
import SignUpBG from '../images/signup.png';
import '../App.css';
 


function SignUp() {
    return (

        <div className=" flex flex-col lg:flex-row h-screen">
        {/* Left side - Login Form */}
        <div className="lg:w-1/2 flex items-center justify-center">
            <div className="max-w-md w-full space-y-9">
                <h2  className="title pb-5 mt-4 text-4xl text-zinc-900 font-semibold text-center lg:text-left">
                    Sign up 
                </h2>
                <form className="mt-8 space-y-6">
                    <div className="flex flex-col">
                        <Label htmlFor="name" className="text-left text-zinc-950 mb-2">Name</Label>
                        <Input
                            type="text"
                            id="name"
                            required
                            className="block mb-1 w-96 px-2 py-5 border-2 border-gray-500 rounded-md focus:outline-none"
                        />
                    </div>
                    <div className="flex flex-col">
                        <Label htmlFor="email" className="text-left  text-zinc-950 mb-2">Email</Label>
                        <Input
                            type="email"
                            id="email"
                            required
                            className="block mb-1 w-96 px-4 py-5 border-2 border-gray-500 rounded-md focus:outline-none"
                        />
                    </div>
                    <div className="flex flex-col">
                        <Label htmlFor="PhoneNumber" className="text-left  text-zinc-950 mb-2">Phone Number</Label>
                        <Input
                            type="number"
                            id="number"
                            required
                            className="block mb-1 w-96 px-4 py-5 border-2 border-gray-500 rounded-md focus:outline-none"
                        />
                    </div>
                    <div className="flex flex-col">
                        <Label htmlFor="password" className="text-left  text-zinc-950 mb-2">Password</Label>
                        <Input
                            type="password"
                            id="password"
                            required
                            className="block mb-1 w-96 px-4 py-5 border-2 border-gray-500 rounded-md focus:outline-none"
                        />

                        
                    </div>

                    <div className="flex flex-col">
                        <Label htmlFor="password" className="text-left  text-zinc-950 mb-2">Select Role</Label>


                    <Select className="block mb-1 w-96 px-4 py-5 border-2 border-gray-500 rounded-md focus:outline-none">
                        <SelectTrigger className=" mb-2 w-96 px-4 py-5 border-2 border-gray-500 rounded-md focus:outline-none">
                            <SelectValue  placeholder="Roles" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="recuriter">Recuriter</SelectItem>
                            <SelectItem value="job">Finding a job</SelectItem>
                        </SelectContent>
                    </Select>       
                                            </div>

                    
                    <Button
                        type="submit"
                        className=" block w-96 h-67 py-3 bg-zinc-950 text-white rounded-md"
                    >
                        Sign in
                    </Button>

                    <div className="pt-5">


                     

                    <a href="" className="  block font-semibold text-blue-600 text-lg">Already have an account? Sign in ↗</a>

                    </div>
                </form>
            </div>
        </div>
        {/* Right side - Image */}
        <div className="lg:w-1/2 flex items-start">
            <img src={SignUpBG} alt="Background" className="w-full h-screen object-cover" />
        </div>
    </div>
    );
}

 

export default SignUp; 