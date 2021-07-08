import React from 'react';
import { Link } from 'react-router-dom';
import Search from "@material-ui/icons/Search";
//import { IconButton } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';

const Form = () => {
    const [query, setQuery] = React.useState("");

return (
    <div style={{border: "1px solid red",display:"flex", alignItems:"center", background: "#f1f3f4",height:"48px",borderRadius:"10px",width:"100%",position: "relative"}}> 
    <div style={{width:"10%"}}>
    <Link to={{pathname: "/headlines/Search/", data: { query } }}>
    <div style={{textAlign:"center", verticalAlign:"middle"}}><Search style={{verticalAlign:"middle"}}/></div> 
    </Link>
    </div> 
    <div style={{width:"70%"}}>
    <input style={{background: "transparent", border:"0px",width:"100%"}} value={query} placeholder="Enter football club or figures?" type="text" onChange={(event) => {setQuery(event.target.value); console.log("Onchange - ",event.target.value);}}/>
    </div>
    <div style={{width:"5%", position: "absolute", right: "20px", paddingTop:"10px", cursor:"pointer"}}>
    <ClearIcon onClick={()=> {setQuery("")}} />
    </div>
    </div>

)

}

export default Form