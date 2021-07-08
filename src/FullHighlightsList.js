import React from 'react';
import Moment from 'react-moment';

function FullHighlightsList(props) {
    const urlRegex = /(https?:\/\/[^ ]*)/;
    const [highlightSrc,setHighlightSrc] = React.useState(props.location.data?.props.highlights[0].embed);
    window.scrollTo(0, 0);
    
    const handleChange =(src) => {
        setHighlightSrc(src);
    }

    let list = (props.location.data?.props.highlights).map((item,index) => {
        return (
        <div className="borderOrange fhighlights1" key={index} onClick={()=>handleChange(item.embed)}>
        <div className="fhighlights2">
        <strong>Match: {item.title}</strong>
        <br></br><small>Competition: {item.competition.name}</small>
        <br></br><small>Published: {<Moment fromNow>{item.date}</Moment>}</small>
        </div>
        <div className="fhighlights3">
        <div className="fhighlights4">
        <img src={item.thumbnail} alt="" width="100%" height="100%"/>
            </div>  
            </div>
       </div>
        )
      })

  return (
  <>
  <div>
      <div>
            <div className="fhighlights5">
            <div>
                        <h2>Viewer</h2>
                        <iframe
                            src={highlightSrc?.match(urlRegex)[1]}
                            frameBorder="0"
                            width="500"
                            height="500"
                            alt=""
                            allow="autoplay; fullscreen"
                            title="This is a unique title"
                        ></iframe>
            </div>
            </div>   
            <hr></hr>
            <h2 className="fhighlights6">Full Highlights List</h2> 
            <div className="fhighlights7">
                    {list}
            </div>
    </div>
    </div>
  </>
  );
}

export default FullHighlightsList;