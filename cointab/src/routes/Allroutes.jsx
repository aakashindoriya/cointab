import { Route, Routes } from "react-router-dom";
import Home from "../component/Home";
import UserDetails from "../component/UserDetails";

export default function Allroutes(){
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/userdetails" element={<UserDetails/>} />
        </Routes>
    )
}