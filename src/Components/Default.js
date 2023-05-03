import React,{useState,useEffect} from "react";
import axios from "axios"
import { useLocation } from "react-router-dom";
const Default = () => {
    const [data, setData] = useState([]);
    const [page,setPage] = useState(1)
    const location = useLocation();
    useEffect(() => {
        setData([])
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=26aa3727ae7987fd2231c69574fc4ac9&format=json&nojsoncallback=1&extras=url_m,url_n,url_z,url_c,url_l,url_o&tags=${location.state.name}&page=${page}&per_page=20`)
            .then((res) => { setData(res.data.photos.photo) })


    }, [location.state.name,page])
    return (
        <>
        {
            data.length!==0 ? (
                <div>
                    <h1 className="header" >{location.state.name} Pictures</h1>
                      <div className="main-div" >
                {data?.map((data, index) => {
                    return (
                        <div key={index} className="image-div" >
                            {/* {console.log(data)} */}
                            <img src={data.url_c ||
                                data.url_l ||
                                data.url_o ||
                                data.url_z ||
                                data.url_n ||
                                data.url_m} className="images" />
                        </div>
                    )
                })}
            </div>
                </div>
              
            ):
            (
                <h1 className="loader" >Loading....</h1>
            )
        }
         
            <div className="pagination-div" >
                    <button className="page-btn" 
                    onClick={() => {
                        if(page ===1){
                            setPage(page=1)
                        }
                        else{
                            setPage(page-1)
                        }
                    }}
                    >{"<"}</button>
                    <div className="page" >{page}</div>
                    <button className="page-btn"  onClick={() => {
                      setPage(page+1)
                    }} >{">"}</button>
                </div>
        </>
    )
}

export default Default