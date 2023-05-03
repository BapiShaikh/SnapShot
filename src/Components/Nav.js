import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";


const Navbar = () => {
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const search = () =>{
        if(name){
            navigate("/default" , {state:{name:name}})
            setName("");
        }
        else return
    }
        
 
    return (
        <>
            <h1 className="header" >SnapShot</h1>
            <div className="search-div" >
                <input className="search" placeholder="search..." onChange={(e) => { setName(e.target.value) }} />
                <button className="btn-search" onClick={search} 
     >
                    <SearchIcon />
                </button>
            </div>
            <div className="all-btn" >
                <button className="btn" onClick={() => { navigate("/mountains") }} >Mountains</button>
                <button className="btn" onClick={() => { navigate("beaches") }}  >Beaches</button>
                <button className="btn" onClick={() => { navigate("/birds") }}  >Birds</button>
                <button className="btn" onClick={() => { navigate("/food") }}  >Food</button>
            </div>


        </>
    )
}

export default Navbar;