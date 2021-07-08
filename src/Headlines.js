import React from "react";
import WebUrl from "./WebUrl";
import ApiCall from "./ApiCall";
import Highlights from "./Highlights";
import News from "./News";

function Headlines() {

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
        
            <div style={{ border:"1px solid orange", width:"100%"}}>
            <ApiCall url={WebUrl.highlights} handleApiCall={handleApiCall} isFirstLoad={isFirstLoad}/>
            <ApiCall url={WebUrl.headlines} handleApiCall={handleApiCallNews} isFirstLoad={isFirstLoadNews}/>
            <News news={news} url={WebUrl.headlines} count={0}/>
            <span style={{ display: "block", width: "100px" }}></span>
            <Highlights highlights={highlights}/>
            </div>
    
    </>
  );
}

export default Headlines;