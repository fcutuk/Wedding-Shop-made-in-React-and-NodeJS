import React from "react";

function Footer(){
    return (
        <footer className="flex justify-center gap-96 bg-black">
            <div className="mt-12">
                <img src="img/logo.png" alt="Logo" height={"100px"} width={"150px"}/>
                <h4 className="text-white"><b>Luxary Wedding Shop</b></h4>
            </div>
            <div className="text-white mt-2 mb-2">
                <h4>Bridal Finds, DOO</h4>
                <h4>Ferhadija 25</h4>
                <h4>Sarajevo, 71000</h4>
                <h4>Bosnia and Herzegovina</h4>
                <br></br>
                <h4>About</h4>
                <h4>Payment</h4>
                <h4>Customer Serive</h4>
            </div>
        </footer>
    );
}

export default Footer;