import React from "react";

const Navbar = () => {
    return (
        <nav className="bg-gray-800 py-4 fixed top-0 w-full z-50">
            <div className="container items-start text-left ml-5">
                <div className="text-white font-bold text-xl">Human Density Detection</div>
            </div>
        </nav>
    );
};

export default Navbar;
