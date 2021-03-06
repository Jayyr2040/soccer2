import React from "react";
import WebUrl from "./WebUrl";
import ApiCall from "./ApiCall";
import Highlights from "./Highlights";
import News from "./News";

function Favourites() {

  const [highlights, setHighlights] = React.useState([]);
  const [news, setNews] = React.useState([]);
  const [isFirstLoad, setFirstLoad] = React.useState(true);
  const [isFirstLoadNews, setFirstLoadNews] = React.useState(true);

  const handleApiCall = (data) => {
      setFirstLoad(false);
     // console.log("First Load Highlights - ", isFirstLoad);
      setHighlights(data);
  };

  const handleApiCallNews = (data) => {
      setFirstLoadNews(false);
    //  console.log("First Load News - ", isFirstLoadNews);
      setNews(data);
  };

  return (
    <> 
            <div className="favourites1">
                <ApiCall url={WebUrl.highlights} handleApiCall={handleApiCall} isFirstLoad={isFirstLoad}/>
                <ApiCall url={WebUrl.favourites} handleApiCall={handleApiCallNews} isFirstLoad={isFirstLoadNews}/>
                <News news={news} url={WebUrl.favourites}  count={1}/>
                <span className="favourites2"></span>
                <Highlights highlights={highlights}/>
            </div>
    </>
  );
}

export default Favourites;