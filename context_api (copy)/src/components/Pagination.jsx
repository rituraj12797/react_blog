import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import './footer.css'
function Pagination() {
    let {page,totalPage,pageChange}=useContext(AppContext);
    console.log(page,totalPage)
    return ( <div className="footer">
       
            {
            (page>1)&& <button
             onClick={
                      ()=>{
                            console.log("initinally the page was ",page)
                            pageChange(page-1)
                            console.log("now the page is ",page)
                            }
                    }>
                Previous</button>}

           {page<totalPage &&  <button onClick={()=>{
            console.log(" initially the page was ",page)
            pageChange(page+1)
            console.log("now the page is ",page)
           }}>Next</button>}
            <div>
            Page {page} of {totalPage}
             </div>
        
       
    </div> );
}

export default Pagination;