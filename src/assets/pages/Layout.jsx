import {Link, Outlet } from "react-router-dom";


export default function Layout(){
    return (
        <div className="mt-10">
            <header>
                <ul className="flex justify-center items-center ">
                    <li className="p-4 mx-3 rounded bg-green-600 shadow-sm"><Link className="text-3xl font-bold text-white" to="/">Home</Link></li>
                    <li className="p-4 mx-3 rounded bg-green-600 shadow-sm"><Link className="text-3xl font-bold text-white" to="/About">About</Link></li>
                    <li className="p-4 mx-3 rounded bg-green-600 shadow-sm"><Link className="text-3xl font-bold text-white" to="/Contact">Contact</Link></li>
                    <li className="p-4 mx-3 rounded bg-green-600 shadow-sm"><Link className="text-3xl font-bold text-white" to="/Gallery">Gallery</Link></li>
                  
                </ul>
            </header>
            <main className="h-80">
                <p>this is main section</p>
                <Outlet/>
            </main>
            <footer className="text-center bg-gray-800 py-2">
                <p className="text-white">this is footer</p>
            </footer>
        </div>
    )
}