import React from 'react'
import {Link} from 'react-router-dom'
import Webpage from './Webpage'

const SideBar = () => {

    return(
        <>
        <Link to={Webpage.headlines} className="titleLink">
        <div  tabIndex="1" style={{paddingTop: "30px", border:"1px solid #e3dcdc", cursor:"pointer",borderRadius:"0 20px 20px 0"}}>
            {/* <div  className="sidebar" tabIndex="1" style={{paddingTop: "10px", border:"1px solid #e3dcdc", cursor:"pointer", borderRadius:"0 20px 20px 0"}}> */}
            <div className="sidebar">
                Top Stories
                </div>
            </div>
        </Link>
        <Link to={Webpage.favourites} className="titleLink">
            <div  tabIndex="2" style={{paddingTop: "30px", border:"1px solid #e3dcdc", cursor:"pointer",borderRadius:"0 20px 20px 0"}}>
                <div className="sidebar">
                    Favourites
                </div>
            </div>
        </Link>
        </>

    )
}

export default SideBar