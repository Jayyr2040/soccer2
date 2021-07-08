import React from 'react'
import {Link} from 'react-router-dom'
import Webpage from './Webpage'
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

const SideBar = () => {

    return(
        <>
        <Link to={Webpage.headlines} className="titleLink">
        <div  tabIndex="1" style={{paddingTop: "30px", border:"1px solid #e3dcdc", cursor:"pointer",borderRadius:"0 30px 30px 0"}}>
                <div className="sidebar" style={{display:"flex"}}> 
                    <div >
                    <ViewHeadlineIcon style={{fontSize: "18px"}}/>
                    </div>
                    <div style={{paddingBottom: "8px"}}>
                        Top Stories
                        </div>
                </div>
            </div>
        </Link>
        <Link to={Webpage.favourites} className="titleLink">
            <div  tabIndex="2" style={{paddingTop: "30px", border:"1px solid #e3dcdc", cursor:"pointer",borderRadius:"0 30px 30px 0"}}>
                <div className="sidebar" style={{display:"flex"}}>
                <div >
                    <BookmarkBorderIcon style={{fontSize: "18px"}}/>
                    </div>
                    <div style={{paddingBottom: "8px"}}>
                        Favourites
                        </div>
                </div>
            </div>
        </Link>
        </>

    )
}

export default SideBar