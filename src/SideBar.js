import React from 'react'
import {Link} from 'react-router-dom'

const SideBar = (props) => {

    return(
        <div style={{ border:"1px solid #e3dcdc", width:"10%"}}>
           {/*  <div  className="sidebar" tabIndex="1" style={{paddingTop: "30px", border:"1px solid #e3dcdc", cursor:"pointer"}} onClick={props.handleTop}>Top Stories</div>
            <div  tabIndex="2" style={{paddingTop: "30px", border:"1px solid #e3dcdc", cursor:"pointer"}} onClick={props.handleFave}>
            <div className="sidebar">Favourites</div>
            </div> */}
          {/*   <div  tabIndex="3" style={{paddingTop: "30px", border:"1px solid #e3dcdc", cursor:"pointer"}} onClick={props.handleManC}>
            <div className="sidebar">ManC</div>
            </div> */}
             <div  className="sidebar" tabIndex="1" style={{paddingTop: "30px", border:"1px solid #e3dcdc", cursor:"pointer"}}>
             <Link to={{pathname: "/headlines/topStories/", data: { props } }}>
                 Top Stories
                 </Link>
                 </div>
                 
            <div  tabIndex="2" style={{paddingTop: "30px", border:"1px solid #e3dcdc", cursor:"pointer"}}>
            <Link to={{pathname: "/headlines/favourites/", data: { props } }}>
            <div className="sidebar">Favourites</div>
            </Link>
            </div>
        </div>


    )
}

export default SideBar