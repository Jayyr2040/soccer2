import React from 'react'
import {Link} from 'react-router-dom'
import Webpage from './Webpage'

const SideBar = () => {

    return(
        <>
        <Link to={Webpage.headlines} className="titleLink">
            <div  className="sidebar" tabIndex="1" style={{paddingTop: "30px", border:"1px solid #e3dcdc", cursor:"pointer", borderRadius:"10px"}}>
               
                Top Stories
               
            </div>
        </Link>
        <Link to={Webpage.favourites} className="titleLink">
            <div  tabIndex="2" style={{paddingTop: "30px", border:"1px solid #e3dcdc", cursor:"pointer",borderRadius:"10px"}}>
           
                <div className="sidebar">
                   
                    Favourites
                </div>
            </div>
        </Link>
        </>

    )
}

export default SideBar