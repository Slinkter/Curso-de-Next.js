import Link from "next/link";
import React from "react";

const Navbar = () => {
    return (
        <nav>
            <menu>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/about">
                    <a>About</a>
                </Link>
            </menu>
        </nav>
    );
};

export default Navbar;
