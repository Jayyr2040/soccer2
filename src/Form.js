import React from 'react';
import { Link } from 'react-router-dom';
import Search from "@material-ui/icons/Search";
//import { IconButton } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';

const Form = () => {
    const [query, setQuery] = React.useState("");

return (
    <div className="nav-item" style={{display:"flex", alignItems:"center", background: "#f1f3f4",marginLeft:"150px",height:"50px",borderRadius:"10px",width:"700px"}}> 
    <div style={{width:"10%"}}>
    <Link to={{pathname: "/headlines/Search/", data: { query } }}>
    <div style={{textAlign:"center", verticalAlign:"middle"}}><Search style={{verticalAlign:"middle"}}/></div> 
    </Link>
    </div> 
    <div style={{width:"90%"}}>
    <input style={{background: "transparent", border:"0px",width:"90%"}} value={query} placeholder="Enter football club or figures?" type="text" onChange={(event) => {setQuery(event.target.value); console.log("Onchange - ",event.target.value);}}/>
    </div>
    <div style={{width:"10%"}}>
    <ClearIcon onClick={()=> {setQuery("")}} />
    </div>
    </div>

)

}

export default Form