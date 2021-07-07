import React from 'react'
import {Link} from 'react-router-dom'
import Webpage from './Webpage'
import Form from './Form';
function Header() {


const colorMyWord = (word) => {
const colorArr = ["Red","#FF8C00","#FFEE00","#4DE94C","#3783FF","#4815AA","#Red","#FF8C00"];
const titleArr = word.split("")
const titleColored = titleArr.map((item,index) => {
        return ( <span style={{color: colorArr[index]}} key={index}>{item}</span>)})

        return titleColored
}

    return (
        <>
            <div className="nav-item" style={{width: "18%",border: "1px solid #e3dcdc" }}><span className="nav-logo">
                <Link to={Webpage.headlines} className="titleLink">
                    {colorMyWord("MySoccer")}
                </Link>
                </span>
            </div>
            <div className="nav-item" style={{width: "10%" ,border: "1px solid #e3dcdc"}}><span className="nav-logo">
                <Link to={Webpage.about} className="titleLink">
                    {colorMyWord("About")}
                </Link>
                </span>
            </div>
            <div className="nav-item" style={{width: "50%",border: "1px solid blue" , marginLeft:"100px" }}>
                <Form/>
            </div>
    
        </>
    );
}

export default Header