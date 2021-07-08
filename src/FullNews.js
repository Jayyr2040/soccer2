import React from 'react';
import Moment from 'react-moment';
import newsData from './staticData';

function FullNews(props) {
   /*  console.log("Full News Coverage",props.location.data?.props.news);
    console.log("Fake full news coverage", newsData[(props.location.data?.props.count)].news); */
    window.scrollTo(0, 0)
    const cNewsData = (  ((typeof (props.location.data?.props?.news.articles) !== 'undefined') && (props.location.data?.props?.news.articles.length > 0)) ? props.location.data?.props.news :newsData[props.location.data?.props.count].news)  ;

    let list = (cNewsData.articles).map((item,index) => {
        return (
                    <div className="borderOrange fnews1" key={index}>
                    <div className="fnews2">
                    <a href={item?.url}><span> News: {item?.title}</span></a>
                    <span className="fnews3"></span>
                    <p className="fnews4"> 
                    Source: {item?.source?.name}
                    <span className="fnews5"></span>
                    .
                    <span className="fnews6"></span>
                     Published:
                     <span className="fnews6"></span>
                    {<Moment fromNow>{item?.publishedAt}</Moment>}
                    </p>
                    </div>
                    <div className="fnews7">
                    <img src={item?.image} alt=""  width="100%" height="100%" style={{borderRadius:"10px"}}/>
                    </div>
                    </div>
        )
      })

  return (
  <>
      <h3>Full News Coverage</h3> 
      <hr></hr>
      <div className="fnews8">
          {list}
      </div>

  </>
  );
}

export default FullNews;