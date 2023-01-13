import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar(){
    return(
        <div className="bg-black">
            <div className="flex justify-center">
                <a href="/"><img src="img/logo.png" alt="Logo" height={"120px"} width={"250px"} className="mt-4"/></a>
            </div>

            <div>
                <div>
                    <input type="text" placeholder="Search" className="border-2 rounded-xl ml-5 text-center text-black"/>
                </div>
                <div className="flex justify-end gap-8 mr-12">
                    <img src="img/truck.png" alt="Truck" height={"40px"} width={"40px"}/>
                    <img src="img/user.png" alt="User" height={"40px"} width={"40px"}/>
                </div>
            </div>

            <div className="flex justify-center gap-8 text-xl">
                <Link to="/weddingAccessory" className="text-white">Wedding Accessory</Link>
                <Link to="/bridalCrown" className="text-white">Bridal Crown</Link>
                <Link to="/hennaCrown" className="text-white">Henna Crown</Link>
                <Link to="/bridalaccessory" className="text-white">Bridal Accessory</Link>
                <Link to="/headPiece" className="text-white">Head Piece</Link>
                <Link to="/bridalBouquet" className="text-white mb-4">Bridal Bouquet</Link>
            </div>
        </div>
    );
}

export default Navbar;