import Moment from "react-moment";
//import Webpage from "./Webpage";
import { Link } from "react-router-dom";
import CollectionsIcon from '@material-ui/icons/Collections';

const Highlights = (props) => {

  const urlRegex = /(https?:\/\/[^ ]*)/;

  const articles = (props, counter) => {
    return (
      <>
      <li>
        <div style={{border: "1px solid red", flexDirection: "row", display: "flex", height: "300px",width:"100vw"}}>
        <div style={{width:"40%"}}>
            <h4> Match: {props?.highlights?.[counter]?.title}</h4>
            <span style={{ display: "block", width: "20px" }}></span>
            <div style={{fontSize:"12px",border: "1px solid #e3dcdc"}}>
            Competition: {props?.highlights?.[counter]?.competition?.name}
            <span style={{ display: "inline-block", width: "10px" }}></span>
            </div>
            <div style={{fontSize:"12px",border: "1px solid #e3dcdc"}}>
            .
            <span style={{ display: "inline-block", width: "5px" }}></span>
            Published:
            <span style={{ display: "inline-block", width: "5px" }}></span>
            {<Moment fromNow>{props?.highlights?.[counter]?.date}</Moment>}
            {/* <span style={{ display: "inline-block", width: "400px" }}></span> */}
            </div>
        </div>
        <div style={{border: "1px solid #e3dcdc", width:"41%",borderRadius:"10px"}}>
            <div style={{height:"100%"}}>
                <iframe
                    src={props?.highlights?.[counter]?.embed?.match(urlRegex)[1]}
                    frameBorder="0"
                    width="100%"
                    height="100%"
                    alt=""
                    allow="autoplay; fullscreen"
                    title="This is a unique title"   
                    top= "0"
                    left= "0"
                    bottom= "0"
                    right= "0"
                  
                ></iframe>
              </div>
        </div>
        </div>
      </li>   
      </>
    );
  };

  return (
    <>
      <div>
        <h3>Soccer highlights</h3>
      </div>
      <div style={{border: "1px solid orange", borderRadius:"10px", alignContent:"flex-start", justifyContent:"start-end", flexFlow: "column wrap", display:"flex",position: "relative",overflow: "auto"}}>
          <ul>
            {articles(props, 0)}
            {articles(props, 1)}
            {articles(props, 2)}
          </ul>
        <div style={{ border: "1px solid #e3dcdc", color:"blue"}}>
          <Link to={{pathname: "/headlines/FullHighlightsList/", data: { props } }}>
          <CollectionsIcon style={{fontSize:"18px"}}/>
          <div style={{fontSize:"15px",border: "1px solid red"}}>View Full Highlights list</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Highlights;