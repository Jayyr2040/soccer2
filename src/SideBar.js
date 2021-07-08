import React from 'react'
import {Link} from 'react-router-dom'
import Webpage from './Webpage'
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

const SideBar = () => {

    return(
        <>
        <Link to={Webpage.headlines} className="titleLink">
        <div  tabIndex="1" className="sidebar1">
                <div className="sidebar sidebar2"> 
                    <div >
                    <ViewHeadlineIcon className="sidebar3"/>
                    </div>
                    <div className="sidebar4">
                        Top Stories
                        </div>
                </div>
            </div>
        </Link>
        <Link to={Webpage.favourites} className="titleLink">
            <div  tabIndex="2" className="sidebar1">
                <div className="sidebar sidebar2">
                <div >
                    <BookmarkBorderIcon className="sidebar3"/>
                    </div>
                    <div className="sidebar4">
                        Favourites
                        </div>
                </div>
            </div>
        </Link>
        </>

    )
}

export default SideBar