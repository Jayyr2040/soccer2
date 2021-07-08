import Moment from "react-moment";
import { Link } from "react-router-dom";
import CollectionsIcon from '@material-ui/icons/Collections';
import newsData from "./staticData";

const News = (props) => {
 window.scrollTo(0, 0);
 console.log("props news status - ",props?.news);
 console.log("props url status - ",props?.url);
 console.log("props length status - ", props?.news.length);
 console.log("fake data -", newsData[props?.count]);
 const cNewsData = {news : ( ((typeof (props?.news?.articles) !== 'undefined') &&  (props?.news?.articles?.length > 0)) ? {...props?.news} : newsData[props?.count].news), url :(typeof (props?.news?.articles) !== 'undefined'? props?.url :newsData[props?.count].url)}  ;
 console.log("cNews - ",cNewsData )

  const articles = (props, counter) => {
    return (
      <>
        <li>
        <div style={{flexDirection: "row", display: "flex", height: "150px"}}>
        <div style={{width:"78%"}}>
            <a href={props?.news?.articles?.[counter]?.url} ><h4> News: {props?.news?.articles?.[counter]?.title}</h4></a>
            <span style={{ display: "block", width: "20px" }}></span>
            <p style={{fontSize :"12px"}}> 
            Source: {props?.news?.articles?.[counter]?.source?.name}
            <span style={{ display: "inline-block", width: "10px" }}></span>
            .
            <span style={{ display: "inline-block", width: "5px" }}></span>
            Published:
            <span style={{ display: "inline-block", width: "5px" }}></span>
            {<Moment fromNow>{props?.news?.articles?.[counter]?.publishedAt}</Moment>}
            <span style={{ display: "inline-block", width: "150px" }}></span>
            </p>
        </div>
        <div style={{width:"22%" }}>
            <img src={props?.news?.articles?.[counter]?.image} alt="" width="100%" height="100%" style={{borderRadius:"10px"}} />
        </div>
        </div>
        </li> 
      </>
    );
  };

  return (
    <>
      <div>
        <h3>Headlines <span style={{fontWeight: "normal"}}>({((cNewsData?.url.slice(cNewsData?.url.lastIndexOf('=') + 1).split('+')).map(item=>(item.charAt(0).toUpperCase()+item.substr(1)))).join(" ")})</span></h3>
      </div>
      <div className="borderOrange" style={{borderRadius:"10px" , alignContent:"flex-start", justifyContent:"start-end", flexFlow: "column wrap", display:"flex"}}>
          <ul>
              {articles(cNewsData , 0)}
              {articles(cNewsData, 1)}
          </ul>
        <div style={{color:"blue"}}>
          <Link to={{pathname: "/headlines/FullNews/", data: {props } }}>
          <CollectionsIcon style={{fontSize:"18px"}}/>
         <div style={{fontSize:"15px"}}>View Full Coverage</div>
          </Link>
         
      </div>
      </div>
    </>
  );
};

export default News;