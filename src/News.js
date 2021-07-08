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
        <div className="news1">
        <div className="news2">
              <a href={props?.news?.articles?.[counter]?.url}  target="_blank" rel="noreferrer"><h4> News: {props?.news?.articles?.[counter]?.title}</h4></a>
              <span className="news3"></span>
              <p className="news4"> 
              Source: {props?.news?.articles?.[counter]?.source?.name}
              <span className="news5"></span>
              .
              <span className="news6"></span>
              Published:
              <span className="news6"></span>
              {<Moment fromNow>{props?.news?.articles?.[counter]?.publishedAt}</Moment>}
              <span className="news7"></span>
              </p>
        </div>
        <div className="news8">
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
          <h3>Headlines <span className="news9">({((cNewsData?.url.slice(cNewsData?.url.lastIndexOf('=') + 1).split('+')).map(item=>(item.charAt(0).toUpperCase()+item.substr(1)))).join(" ")})</span></h3>
      </div>
      <div className="borderOrange news10">
          <ul>
              {articles(cNewsData , 0)}
              {articles(cNewsData, 1)}
          </ul>
        <div className="news11">
            <div><CollectionsIcon className="news12"/></div>
            <Link to={{pathname: "/headlines/FullNews/", data: {props } }}>
            <div className="news13">View Full Coverage</div>
            </Link>
      </div>
      </div>
    </>
  );
};

export default News;