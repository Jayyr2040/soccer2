import React from 'react';
import { Link } from 'react-router-dom';
import Search from "@material-ui/icons/Search";
//import { IconButton } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';

const Form = () => {
    const [query, setQuery] = React.useState("");

return (
    <div className='form1'> 
            <div className='form2'>
                    {/* <Link to={{pathname: "/headlines/Search/", data: { query } }}> */}
                    <Link to={`/headlines/Search/${query}`}>
                    <div className='form3'><Search className='form4 form8'/></div> 
                    </Link>
            </div> 
            <div className='form5'>
                    <input className='form6' value={query} placeholder="Enter football club or figures?" type="text" onChange={(event) => {setQuery(event.target.value); console.log("Onchange - ",event.target.value);}}/>
            </div>
            <div className='form7'>
                    <ClearIcon className='form8' onClick={()=> {setQuery("")}} />
            </div>
    </div>

)
}

export default Form