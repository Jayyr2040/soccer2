import React from "react";
import WebUrl from "./WebUrl";
import ApiCall from "./ApiCall";
import Highlights from "./Highlights";
import News from "./News";

function Search(props) {

  const [highlights, setHighlights] = React.useState([]);
  const [search, setSearch] = React.useState([]);
  const [isFirstLoad, setFirstLoad] = React.useState(true);
  const [isFirstLoadSearch, setFirstLoadSearch] = React.useState(true);

  const searchQuery = props.location.data?.query;
  console.log("query in search component", searchQuery);
  const strAr = searchQuery.split(' '); 
  const queryUrl =  WebUrl.search + strAr.join('+');
  console.log("query url - search component - ",queryUrl);

  const handleApiCall = (data) => {
      setFirstLoad(false);
      setHighlights(data);
  };

  const handleApiCallSearch = (data) => {
      setFirstLoadSearch(false);
      setSearch(data);
  };


  return (
    <>
            <div style={{ border:"1px solid #e3dcdc", width:"100%"}}>
            <ApiCall url={WebUrl.highlights} handleApiCall={handleApiCall} isFirstLoad={isFirstLoad}/>
            <ApiCall url={queryUrl} handleApiCall={handleApiCallSearch} isFirstLoad={isFirstLoadSearch}/>
            <News news={search} url={queryUrl}  count={2} />
            <span style={{ display: "block", width: "100px" }}></span>
            <Highlights highlights={highlights}/>
            </div>
    </>
  );
}

export default Search;