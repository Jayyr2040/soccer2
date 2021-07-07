import React from 'react'
import { Route,Switch,Redirect} from "react-router-dom";
import Webpage from './Webpage'
// import Home from './Home';
import Headlines from './Headlines';
import About from './About';
import FullHighlightsList from './FullHighlightsList';
import FullNews from './FullNews';
import Search from './Search';
import SideBar from './SideBar';
import Favourites from './Favourites';


function Main() {

    return (
        <main>
            <div style={{display:"flex"}}>
            <div style={{width:"15%",border:"1px solid red"}}>
            <SideBar/>
            </div>
            <div style={{ border:"1px solid #e3dcdc", width:"85%"}} >
            <Switch>
                <Route exact path={Webpage.headlines} component={Headlines}/>
                <Route exact path={Webpage.search} component={Search}/>
                <Route exact path={Webpage.favourites} component={Favourites}/>
                <Route exact path={Webpage.news} component={FullNews}/>
                <Route exact path={Webpage.highlights} component={FullHighlightsList}/>
                <Route path={Webpage.about} component={About}/>
                <Redirect to={Webpage.headlines} />
            </Switch>
            </div>
            </div>
        </main>
    )
}

export default Main;