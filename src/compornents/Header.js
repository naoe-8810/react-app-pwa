import React from "react";
import { signInWithGoogle } from "../service/firebase";

const Header = () => {
    return(
        <header>
            header
            <button onClick={signInWithGoogle}> LOGIN </button>
        </header>
    )
}
export default Header;