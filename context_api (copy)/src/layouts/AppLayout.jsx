import { Outlet } from "react-router-dom";


function AppLayOut() {
    return ( <div className="App">
         <Outlet></Outlet>
    </div> );
}

export default AppLayOut;