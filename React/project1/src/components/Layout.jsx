import React from "react";
import Header from "./Header";
import Footer from "./Footer";
function Layout(){
    return(
        <div>
            <Header/>
            <main style={{height:"80vh"}}></main>
            <Footer/>
        </div>
    );
}

export default Layout;