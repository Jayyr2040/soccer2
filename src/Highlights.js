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
        <div className="highlights1">
        <div className="highlights2">
            <h4> Match: {props?.highlights?.[counter]?.title}</h4>
            <span className="highlights3"></span>
            <div className="highlights4">
            Competition: {props?.highlights?.[counter]?.competition?.name}
            <span className="highlights5"></span>
            </div>
            <div className="highlights4">
            .
            <span className="highlights6"></span>
            Published:
            <span className="highlights6"></span>
            {<Moment fromNow>{props?.highlights?.[counter]?.date}</Moment>}
            <span className="highlights7"></span>
            </div>
        </div>
        <div className="borderGrey highlights8">
            <div className="highlights9">
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
      <div className="borderOrange highlights10">
          <ul>
            {articles(props, 0)}
            {articles(props, 1)}
            {articles(props, 2)}
          </ul>
        <div className="highlights11">
          <CollectionsIcon className="highlights12"/>
          <Link to={{pathname: "/headlines/FullHighlightsList/", data: { props } }}>
          <div className="highlights13">View Full Highlights list</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Highlights;