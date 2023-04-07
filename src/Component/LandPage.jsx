import "./LandPage.css"

import { BiChevronDown } from "react-icons/bi";

import Div_btm from "./Div_btm";

function LandPage() {
    return (
        <div className="LandPage">
            <div className="title">
                <h1>TOKYO</h1>
                <h2>東京</h2>
                <a href="#INF" className="arrow">
                    <BiChevronDown size={100} className="a"/>
                </a>
            </div>

            <nav>
                <a href="#INF">Information</a>
                <a href="#PTV">Places to visit</a>
            </nav>

            <div className="circle"></div>

            <Div_btm/>
            
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Aboreto&display=swap');
            </style>
        </div>
    )
}

export default LandPage