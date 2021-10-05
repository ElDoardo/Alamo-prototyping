import React from "react";
import { MyNavbar1 } from "../components/Navbar1/index";
import { MyNavbar2 } from "../components/Navbar2/index";
import { MyHero } from "../components/Hero/index";
import { MyFooter } from "../components/Footer/index";


export function HomePage(){
    return(
        <>
            {/* <MyNavbar1 />
            <MyNavbar2 /> */}
            <MyHero />
            <MyFooter />
        </>
    )
}