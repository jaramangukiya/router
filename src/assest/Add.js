import { useState } from "react";
import { Link } from "react-router-dom";

const Add = ()=>{
    const [name ,setName] = useState("");
    return(
        <>
            <Link to='/add'></Link>
            <h4>Add student hear</h4>
            <input onChange={(e) => {
                setName(e.target.value);
                console.log(name);
            }}></input>
        </>
    )
}
export default Add;